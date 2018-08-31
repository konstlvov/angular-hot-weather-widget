import {Observable, of} from 'rxjs';

const activities = [
   {address1: 'Sed perspiciatis 1', address2: 'Et harum quidem 1', phone: 'Tel:+1285 968 685 1'}
  ,{address1: 'Sed perspiciatis 2', address2: 'Et harum quidem 2', phone: 'Tel:+1285 968 685 2'}
  ,{address1: 'Sed perspiciatis 3', address2: 'Et harum quidem 3', phone: 'Tel:+1285 968 685 3'}
];

export const activitiesList = activities;
export const activitiesList$ = of(activities);
