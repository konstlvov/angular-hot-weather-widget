import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, empty, of, timer } from 'rxjs';
import { map, filter, switchMap, debounceTime, distinctUntilChanged, catchError, tap, shareReplay, retryWhen, delayWhen } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-livesearch-widget',
  templateUrl: './livesearch-widget.component.html',
  styleUrls: ['./livesearch-widget.component.css']
})
export class LivesearchWidgetComponent implements OnInit {

  public dbgMsg: string = '...';
  public results: IProduct[];
  public typeahead: Observable<any>;
  constructor() { }

  public onInput(e: KeyboardEvent) {
    //this.dbgMsg = 'You entered: ' + e.target.value; // works
  }

  // todo: read something like https://blog.angular-university.io/rxjs-error-handling/
  public bindLiveSearch() {
    const inpSearch: HTMLElement = document.getElementById('inpSearch');
    this.typeahead = fromEvent(inpSearch, 'input').pipe(
       map((e: KeyboardEvent) => (e.target as HTMLTextAreaElement).value)
      ,filter((userInput: string) => userInput.length > 2)
      ,debounceTime(10)
      ,distinctUntilChanged()
      ,switchMap((userInput) => ajax({"url": "http://localhost:8090/api/endpoint", "method": "POST", "body": {"rq": userInput}})
        .pipe(
          tap( () => console.log('ajax called'))
          ,shareReplay()
          ,retryWhen(errors => {return errors.pipe(
            delayWhen( () => timer(2000) )
            ,tap( () => console.log('retrying...') )
          )})
        )
      )
      // catchError takes in Observable, and returns Observable too
      //,catchError(r => {console.log('Error caught:' + r); return of([]);})
    );
    this.typeahead.subscribe(
      data => {
        this.results = data.response;
        //this.dbgMsg = JSON.stringify(data);
      }
      ,err => {
        console.log('***There was an error: ' + err);
      }
      ,() => {
        console.log('Completed');
      }
    )
    ;
  }

  ngOnInit() {
    this.bindLiveSearch();
  }

}
