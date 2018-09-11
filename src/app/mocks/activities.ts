import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

const activities = [
   {actType: 'Hotel', address1: 'Венеция', address2: 'Piazza San-Marco', phone: 'Tel:+1285 968 685 1', airTemp: '40', waterTemp: '20', followers: 100, following: 500}
  ,{actType: 'Fishing', address1: 'Астрахань', address2: 'Петровская набережная', phone: 'Tel:+1285 968 685 2', airTemp: '30', waterTemp: '11', followers: 1000, following: 5000}
  ,{actType: 'Tours', address1: 'Флоренция', address2: 'Ippodromo del Vizzare', phone: 'Tel:+1285 968 685 3', airTemp: '25', waterTemp: '18', followers: 100000, following: 500000}
];

export const activitiesList = activities;
export const activitiesList$ = of(activities).pipe(delay(3000));
