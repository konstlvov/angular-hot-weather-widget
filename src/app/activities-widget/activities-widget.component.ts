import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {activitiesList$} from '../mocks/activities';

@Component({
  selector: 'app-activities-widget',
  templateUrl: './activities-widget.component.html',
  styleUrls: ['./activities-widget.component.css']
})

export class ActivitiesWidgetComponent implements OnInit {
  public filterCriteria: string;
  @Output() public clickEE: EventEmitter<any> = new EventEmitter();
  public currentActivity: IActivity;
  public activitiesList$ = activitiesList$;
  
  public hotelClick(activity) {
    this.currentActivity = activity; // ?? this.currentActivity might be obsolete...
    this.clickEE.emit(this.currentActivity);
  }

  public criteriaClicked(whatClicked) {
    this.filterCriteria = whatClicked;
  }

  constructor() { }

  ngOnInit() {
  }

}
