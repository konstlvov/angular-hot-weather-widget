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
  actType: string;
  image: string;
  address: IAddress;
  weather: IWeather;
  socialInfo: ISocialInfo;
}


interface IProduct {
  _id: string;
  title: string;
  serial: number;
  author: string;
  price: number;
  src: string;
}

