import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable, of, interval} from 'rxjs';
import {activities$} from '../mocks/activities';

@Component({
  selector: 'app-activities-widget',
  templateUrl: './activities-widget.component.html',
  styleUrls: ['./activities-widget.component.css']
})

export class ActivitiesWidgetComponent implements OnInit {
  public secondInterval:Observable<any> = interval(1000);
  public timerMsg: string;
  private _initialized: boolean = false;
  public filterCriteria: string;
  @Output() public clickEE: EventEmitter<IActivity> = new EventEmitter();
  public activitiesList$: Observable<IActivity[]> = activities$;
  // а можно сделать вообще по-умному (c) rooksgc: this.actTypes = new Set(this.places.map(el => el.type));
  public actTypes: string[] = ['Hotel', 'Fishing', 'Tours', 'All'];

  public currentWidgetActivity: IActivity = null;
  
  public hotelClick(activity: IActivity) {
    this.currentWidgetActivity = activity;
    this.clickEE.emit(activity);
  }

  public clickHotel(h: HTMLElement) {
    h.click();
  }

  public lastElementRendered() {
    if (! this._initialized) {
      this._initialized = true;
      setTimeout(() => {this.clickHotel(document.querySelector('.first_hotel'))}, 0);
    }
  }

  public criteriaClicked(whatClicked) {
    this.filterCriteria = whatClicked;
    //document.querySelector('.first_hotel').click();
    setTimeout(() => {this.clickHotel(document.querySelector('.first_hotel'))}, 0);
    //document.querySelector('.activity-row').click(); // this does not work properly
  }

  // заглушка, виден тип аргументов
  public trackByFnActivities(index: number, item: IActivity): void {
  }

  constructor() { }

  ngOnInit() {
    this.secondInterval.subscribe(n => {
      this.timerMsg = `Прошло ${n} секунд`});
  }

}
