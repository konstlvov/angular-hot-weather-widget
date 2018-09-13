import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-widget',
  templateUrl: './social-widget.component.html',
  styleUrls: ['./social-widget.component.css']
})

export class SocialWidgetComponent implements OnInit {

  @Input() public socialInfo: ISocialInfo;
  constructor() { }

  ngOnInit() {
  }

}
