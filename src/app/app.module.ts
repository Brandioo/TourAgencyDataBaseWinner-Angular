import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientTableComponent } from './clients/client-table/client-table.component';
import { ClientManageComponent } from './clients/client-manage/client-manage.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { DestinationTableComponent } from './destinations/destination-table/destination-table.component';
import { DestinationManageComponent } from './destinations/destination-manage/destination-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientTableComponent,
    ClientManageComponent,
    DestinationTableComponent,
    DestinationManageComponent
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
