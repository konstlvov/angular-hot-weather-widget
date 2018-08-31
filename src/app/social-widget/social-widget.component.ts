import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-widget',
  templateUrl: './social-widget.component.html',
  styleUrls: ['./social-widget.component.css']
})

export class SocialWidgetComponent implements OnInit {

  @Input() public followers: number = 0;
  @Input() public following: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
