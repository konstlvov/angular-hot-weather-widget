import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityFilterPipe } from './pipes/activity-filter.pipe';
import { TemperatureWidgetComponent } from './temperature-widget/temperature-widget.component';
import { SocialWidgetComponent } from './social-widget/social-widget.component';
import { ActivitiesWidgetComponent } from './activities-widget/activities-widget.component';
import { PhonePipePipe } from './pipes/phone-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActivityFilterPipe,
    TemperatureWidgetComponent,
    SocialWidgetComponent,
    ActivitiesWidgetComponent,
    PhonePipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
