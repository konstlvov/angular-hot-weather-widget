import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityFilterPipe } from './activity-filter.pipe';
import { TemperatureWidgetComponent } from './temperature-widget/temperature-widget.component';
import { SocialWidgetComponent } from './social-widget/social-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityFilterPipe,
    TemperatureWidgetComponent,
    SocialWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
