import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'hww';
  ngOnInit() {
    $(document).ready(function(c) {
      $('.log-close').on('click', function(c){
        $('.login-bottom').fadeOut('slow', function(c){
            $('.login-bottom').remove();
        });
      });	  
    });
  }
}
