import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent, DialogContentExampleDialog} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DestinationTableComponent} from './destinations/destination-table/destination-table.component';
import {DestinationManageComponent} from './destinations/destination-manage/destination-manage.component';
import {TourTableComponent} from './tours/tour-table/tour-table.component';
import {TourManageComponent} from './tours/tour-manage/tour-manage.component';
import {ReservationTableComponent} from './reservations/reservation-table/reservation-table.component';
import {ClientsTableComponent} from './clients/clients-table/clients-table.component';
import {HomeComponent} from './home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './login/login.component';
import {ReservationManageComponent} from './reservations/reservation-manage/reservation-manage.component';
import {ClientManageComponent} from './clients/client-manage/client-manage.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ShopOnlineComponent} from './shop/ShopOnline.component';
import {BannerManageComponent} from './banners/banner-manage/banner-manage.component';
import {BannerTableComponent} from './banners/banner-table/banner-table.component';
import {BlogManageComponent} from './blogs/blog-manage/blog-manage.component';
import {BlogTableComponent} from './blogs/blog-table/blog-table.component';
import {InstagramTableComponent} from './instagrams/instagram-table/instagram-table.component';
import {InstagramManageComponent} from './instagrams/instagram-manage/instagram-manage.component';
import {TeamMemberManageComponent} from './teammembers/team-member-manage/team-member-manage.component';
import {TeamMemberTableComponent} from './teammembers/team-member-table/team-member-table.component';
import {NotfoundComponent} from './notfound/notfound.component';
import {UserComponent} from './user/user.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {Routes} from '@angular/router';
import { AuthguardGuard } from './authguard.guard';

const appRoutes: Routes = [
  {
    path: 'users',
    pathMatch: 'full',
    children: [
      {
        path: ':name',
        component: UserComponent
      },
      {
        path: ':name/:id',
        component: UserComponent
      }
    ]
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'users/mehulmpt/1',
    pathMatch: 'prefix'
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DestinationTableComponent,
    DestinationManageComponent,
    TourTableComponent,
    TourManageComponent,
    ReservationTableComponent,
    ReservationManageComponent,
    ClientsTableComponent,
    HomeComponent,
    LoginComponent,
    DialogContentExampleDialog,
    ClientManageComponent,
    AboutUsComponent,
    ShopOnlineComponent,
    BannerManageComponent,
    BannerTableComponent,
    BlogManageComponent,
    BlogTableComponent,
    InstagramTableComponent,
    InstagramManageComponent,
    TeamMemberManageComponent,
    TeamMemberTableComponent,
    NotfoundComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
