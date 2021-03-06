import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temperature-widget',
  templateUrl: './temperature-widget.component.html',
  styleUrls: ['./temperature-widget.component.css']
})
export class TemperatureWidgetComponent implements OnInit {

  @Input() public weather: IWeather;
  constructor() { }

  ngOnInit() {
  }

}
