import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

const activities = [
   {actType: 'Hotel', address1: 'Sed perspiciatis 1', address2: 'Et harum quidem 1', phone: 'Tel:+1285 968 685 1', airTemp: '40', waterTemp: '20'}
  ,{actType: 'Fishing', address1: 'Sed perspiciatis 2', address2: 'Et harum quidem 2', phone: 'Tel:+1285 968 685 2', airTemp: '30', waterTemp: '11'}
  ,{actType: 'Tours', address1: 'Sed perspiciatis 3', address2: 'Et harum quidem 3', phone: 'Tel:+1285 968 685 3', airTemp: '25', waterTemp: '18'}
];

export const activitiesList = activities;
export const activitiesList$ = of(activities).pipe(delay(3000));
