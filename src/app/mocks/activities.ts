import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/internal/operators';

const activities: IActivity[] = [
  { actType: 'Hotel', 
    image: 'venezia.jpg',
    address: {address1: 'Венеция', address2: 'Piazza San-Marco', phone: 'Tel:+1285 968 685 1'}, 
    weather: {airTemp: 40, waterTemp: 20}, 
    socialInfo: {followers: 100, following: 500}
  }
  ,{actType: 'Fishing',
    image: 'asraxan.jpg',
    address: {address1: 'Астрахань', address2: 'Петровская набережная', phone: 'Tel:+1285 968 685 2'},
    weather: {airTemp: 30, waterTemp: 11},
    socialInfo: {followers: 1000, following: 5000}
  }
  ,{actType: 'Tours',
    image: 'firenze.jpg',
    address: {address1: 'Флоренция', address2: 'Ippodromo del Vizzare', phone: 'Tel:+1285 968 685 3'},
    weather: {airTemp: 25, waterTemp: 18},
    socialInfo: {followers: 100000, following: 500000}
  }
];

export const activities$: Observable<IActivity[]> = of(activities).pipe(delay(3000));
