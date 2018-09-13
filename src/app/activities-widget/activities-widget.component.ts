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
  public activitiesList$: Observable<IActivity[]> = activitiesList$;
  
  public hotelClick(activity: IActivity) {
    this.clickEE.emit(activity);
  }

  public criteriaClicked(whatClicked) {
    this.filterCriteria = whatClicked;
  }

  constructor() { }

  ngOnInit() {
  }

}
