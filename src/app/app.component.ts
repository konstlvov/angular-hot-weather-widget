import { Component, OnInit } from '@angular/core';
import {activitiesList, activitiesList$} from './mocks/activities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'hww';
  public activitiesList = activitiesList;
  public activitiesList$ = activitiesList$;
  public filterCriteria: string = '';
  public currentAirTemp: string = '14';
  public currentWaterTemp: string = '20';
  public currentFollowers: number = 100;
  public currentFollowing: number = 500;
  public hotelClick(activity) {
    //console.log(activity.address1);
    this.currentAirTemp = activity.airTemp;
    this.currentWaterTemp = activity.waterTemp;
    this.currentFollowers = activity.followers;
    this.currentFollowing = activity.following;
  }
  public criteriaClicked(whatClicked) {
    this.filterCriteria = whatClicked;
    console.log(`Filter criteria now is ${this.filterCriteria}`);
  }
  ngOnInit() {
    //$(document).ready(function(c) {
    //  $('.log-close').on('click', function(c){
    //    $('.login-bottom').fadeOut('slow', function(c){
    //        $('.login-bottom').remove();
    //    });
    //  });	  
    //});
  }
}
