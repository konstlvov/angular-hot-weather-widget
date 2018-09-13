import { Component, OnInit, EventEmitter, Output, Observable } from '@angular/core';
import {activitiesList$} from '../mocks/activities';

@Component({
  selector: 'app-activities-widget',
  templateUrl: './activities-widget.component.html',
  styleUrls: ['./activities-widget.component.css']
})

export class ActivitiesWidgetComponent implements OnInit {
  public filterCriteria: string;
  @Output() public clickEE: EventEmitter<IActivity> = new EventEmitter();
  public currentActivity: IActivity;
  public activitiesList$: Observable<IActivity[]> = activitiesList$;
  
  public hotelClick(activity: IActivity) {
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
