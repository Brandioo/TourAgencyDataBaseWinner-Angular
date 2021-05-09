import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { DestinationTableComponent } from './destinations/destination-table/destination-table.component';
import { DestinationManageComponent } from './destinations/destination-manage/destination-manage.component';
import { TourTableComponent } from './tours/tour-table/tour-table.component';
import { TourManageComponent } from './tours/tour-manage/tour-manage.component';
import { ReservationTableComponent } from './reservation-table/reservation-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DestinationTableComponent,
    DestinationManageComponent,
    TourTableComponent,
    TourManageComponent,
    ReservationTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
