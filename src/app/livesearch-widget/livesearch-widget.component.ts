import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-livesearch-widget',
  templateUrl: './livesearch-widget.component.html',
  styleUrls: ['./livesearch-widget.component.css']
})
export class LivesearchWidgetComponent implements OnInit {

  public dbgMsg: string = '...';
  public results: string = '***';
  public typeahead: Observable;
  constructor() { }

  public onInput(e: KeyboardEvent) {
    //this.dbgMsg = 'You entered: ' + e.target.value; // works
  }

  public bindLiveSearch() {
    const inpSearch: HTMLElement = document.getElementById('inpSearch');
    this.typeahead = fromEvent(inpSearch, 'input').pipe(
      map((e: KeyboardEvent) => e.target.value)
    );
    this.typeahead.subscribe(data => this.dbgMsg = data)
  }

  ngOnInit() {
    this.bindLiveSearch();
  }

}
