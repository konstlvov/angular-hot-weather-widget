import { Component, OnInit } from '@angular/core';
import {activitiesList$} from '../mocks/activities';

@Component({
  selector: 'app-activities-widget',
  templateUrl: './activities-widget.component.html',
  styleUrls: ['./activities-widget.component.css']
})

export class ActivitiesWidgetComponent implements OnInit {
  public currentActivity: IActivity;
  public activitiesList$ = activitiesList$;
  
  public hotelClick(activity) {
    this.currentActivity = activity;
  }

  public criteriaClicked(whatClicked) {
    this.filterCriteria = whatClicked;
    //console.log(`Filter criteria now is ${this.filterCriteria}`);
  }

  constructor() { }

  ngOnInit() {
  }

}
