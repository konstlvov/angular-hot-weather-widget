import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';
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
  // а можно сделать вообще по-умному (c) rooksgc: this.actTypes = new Set(this.places.map(el => el.type));
  public actTypes: string[] = ['Hotel', 'Fishing', 'Tours', 'All'];

  public currentWidgetActivity: IActivity = null;
  
  public hotelClick(activity: IActivity) {
    this.currentWidgetActivity = activity;
    this.clickEE.emit(activity);
  }

  public lastElementRendered() {
    //console.log('lastElementRendered called');
    //document.querySelector('.activity-row').click(); // this does not work properly
  }

  public criteriaClicked(whatClicked) {
    this.filterCriteria = whatClicked;
    //document.querySelector('.first_hotel').click();
    setTimeout(() => {document.querySelector('.first_hotel').click()}, 0);
    //document.querySelector('.activity-row').click(); // this does not work properly
  }

  // заглушка, виден тип аргументов
  public trackByFnActivities(index: number, item: IActivity): void {
  }

  constructor() { }

  ngOnInit() {
  }

}
