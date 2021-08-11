import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AvailableHotelLazyDemo } from './hotels/hotels-data.component';


import { ServiceHelper } from './service/helper';
import { HotelService } from './service/hotelservice';
import { FilterService } from 'primeng/api';


import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { RatingModule } from 'primeng/Rating';
import { CalendarModule } from 'primeng/calendar';
import { ConfirmationService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AvailableHotelLazyDemo
  ],

  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    RatingModule,
    TableModule,
    CalendarModule,
    RouterModule.forRoot([
      { path: '', component: AvailableHotelLazyDemo, pathMatch: 'full' },

    ])
  ],
  providers: [ServiceHelper, HotelService, TableModule, FilterService, ConfirmationService, PrimeNGConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
