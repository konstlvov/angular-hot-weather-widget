import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livesearch-widget',
  templateUrl: './livesearch-widget.component.html',
  styleUrls: ['./livesearch-widget.component.css']
})
export class LivesearchWidgetComponent implements OnInit {

  public dbgMsg: string = '...';
  public results: string = '***';
  constructor() { }

  public onInput(e: KeyboardEvent) {
    this.dbgMsg = 'You entered: ' + e.target.value;
  }

  ngOnInit() {
  }

}
