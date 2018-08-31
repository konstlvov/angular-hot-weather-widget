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
  public hotelClick(arg) {
    console.log('some hotel clicked: ' + arg);
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
