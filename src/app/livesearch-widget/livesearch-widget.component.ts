import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, switchMap, debounceTime, distinctUntilChanged } from 'rxjs/operators';
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

  public bindLiveSearch() {
    const inpSearch: HTMLElement = document.getElementById('inpSearch');
    this.typeahead = fromEvent(inpSearch, 'input').pipe(
       map((e: KeyboardEvent) => (e.target as HTMLTextAreaElement).value)
      ,filter((userInput: string) => userInput.length > 2)
      ,debounceTime(10)
      ,distinctUntilChanged()
      ,switchMap((userInput) => ajax({"url": "http://localhost:8090/api/endpoint", "method": "POST", "body": {"rq": userInput}}))
    );
    this.typeahead.subscribe(data => {
      this.results = data.response;
      //this.dbgMsg = JSON.stringify(data);
    });
  }

  ngOnInit() {
    this.bindLiveSearch();
  }

}
