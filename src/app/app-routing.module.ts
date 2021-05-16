import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DestinationTableComponent} from './destinations/destination-table/destination-table.component';
import {DestinationManageComponent} from './destinations/destination-manage/destination-manage.component';
import {TourTableComponent} from './tours/tour-table/tour-table.component';
import {TourManageComponent} from './tours/tour-manage/tour-manage.component';
import {ReservationTableComponent} from './reservations/reservation-table/reservation-table.component';
import {HomeComponent} from './home/home.component';
import {ClientsTableComponent} from './clients/clients-table/clients-table.component';
import {ReservationManageComponent} from './reservations/reservation-manage/reservation-manage.component';
import {ClientManageComponent} from './clients/client-manage/client-manage.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ShopOnlineComponent} from './shop/ShopOnline.component';
import {BannerTableComponent} from './banners/banner-table/banner-table.component';
import {BannerManageComponent} from './banners/banner-manage/banner-manage.component';

const routes: Routes = [
  {path: '', redirectTo: '/destinations', pathMatch: 'full'},
  {path: 'destinations', component: DestinationTableComponent},
  {path: 'destinations/manage', component: DestinationManageComponent},
  {path: 'destinations/manage/:id', component: DestinationManageComponent},
  {path: 'tours', component: TourTableComponent},
  {path: 'tours/manage', component: TourManageComponent},
  {path: 'tours/manage/:id', component: TourManageComponent},
  {path: 'reservations', component: ReservationTableComponent},
  {path: 'reservations/manage', component: ReservationManageComponent},
  {path: 'reservations/manage/:id', component: ReservationManageComponent},
  {path: 'clients', component: ClientsTableComponent},
  {path: 'clients/manage', component: ClientManageComponent},
  {path: 'clients/manage/:id', component: ClientManageComponent},
  {path: 'banners', component: BannerTableComponent},
  {path: 'banners/manage', component: BannerManageComponent},
  {path: 'banners/manage/:id', component: BannerManageComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'shop', component: ShopOnlineComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
