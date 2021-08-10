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
import {ShopOnlineComponent} from './shop-online/shop-online.component';
import {BannerTableComponent} from './banners/banner-table/banner-table.component';
import {BannerManageComponent} from './banners/banner-manage/banner-manage.component';
import {BlogTableComponent} from './blogs/blog-table/blog-table.component';
import {BlogManageComponent} from './blogs/blog-manage/blog-manage.component';
import {InstagramTableComponent} from './instagrams/instagram-table/instagram-table.component';
import {InstagramManageComponent} from './instagrams/instagram-manage/instagram-manage.component';
import {TeamMemberTableComponent} from './teammembers/team-member-table/team-member-table.component';
import {TeamMemberManageComponent} from './teammembers/team-member-manage/team-member-manage.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {TourBusinessComponent} from './tour-business/tour-business.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutUsComponent, canActivate: [AuthGuard]},
  {path: 'shopOnline', component: ShopOnlineComponent, canActivate: [AuthGuard]},
  {path: 'tourBusiness', component: TourBusinessComponent, canActivate: [AuthGuard]},
  {path: 'destinations', component: DestinationTableComponent, canActivate: [AuthGuard]},
  {path: 'destinations/manage', component: DestinationManageComponent, canActivate: [AuthGuard]},
  {path: 'destinations/manage/:id', component: DestinationManageComponent, canActivate: [AuthGuard]},
  {path: 'tours', component: TourTableComponent, canActivate: [AuthGuard]},
  {path: 'tours/manage', component: TourManageComponent, canActivate: [AuthGuard]},
  {path: 'tours/manage/:id', component: TourManageComponent, canActivate: [AuthGuard]},
  {path: 'reservations', component: ReservationTableComponent, canActivate: [AuthGuard]},
  {path: 'reservations/manage', component: ReservationManageComponent, canActivate: [AuthGuard]},
  {path: 'reservations/manage/:id', component: ReservationManageComponent, canActivate: [AuthGuard]},
  {path: 'clients', component: ClientsTableComponent, canActivate: [AuthGuard]},
  {path: 'clients/manage', component: ClientManageComponent, canActivate: [AuthGuard]},
  {path: 'clients/manage/:id', component: ClientManageComponent, canActivate: [AuthGuard]},
  {path: 'banners', component: BannerTableComponent, canActivate: [AuthGuard]},
  {path: 'banners/manage', component: BannerManageComponent, canActivate: [AuthGuard]},
  {path: 'banners/manage/:id', component: BannerManageComponent, canActivate: [AuthGuard]},
  {path: 'blogs', component: BlogTableComponent, canActivate: [AuthGuard]},
  {path: 'blogs/manage', component: BlogManageComponent, canActivate: [AuthGuard]},
  {path: 'blogs/manage/:id', component: BlogManageComponent, canActivate: [AuthGuard]},
  {path: 'instagrams', component: InstagramTableComponent, canActivate: [AuthGuard]},
  {path: 'instagrams/manage', component: InstagramManageComponent, canActivate: [AuthGuard]},
  {path: 'instagrams/manage/:id', component: InstagramManageComponent, canActivate: [AuthGuard]},
  {path: 'teamMembers', component: TeamMemberTableComponent, canActivate: [AuthGuard]},
  {path: 'teamMembers/manage', component: TeamMemberManageComponent, canActivate: [AuthGuard]},
  {path: 'teamMembers/manage/:id', component: TeamMemberManageComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
