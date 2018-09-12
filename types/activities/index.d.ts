interface IAddress {
  address1: string;
  address2: string;
  phone: string;
}

interface IWeather {
  airTemp: number;
  waterTemp: number;
}

interface ISocialInfo {
  followers: number;
  following: number;
}


interface IActivity {
  //{actType: 'Hotel', address1: 'Венеция', address2: 'Piazza San-Marco', phone: 'Tel:+1285 968 685 1', airTemp: '40', waterTemp: '20', followers: 100, following: 500}
  actType: string;
  address: IAddress;
  weather: IWeather;
  socialInfo: ISocialInfo;
}
