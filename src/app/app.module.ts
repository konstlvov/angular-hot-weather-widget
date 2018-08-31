import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActivityFilterPipe } from './activity-filter.pipe';
import { TemperatureWidgetComponent } from './temperature-widget/temperature-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityFilterPipe,
    TemperatureWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
