import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DestinationTableComponent} from './destinations/destination-table/destination-table.component';
import {DestinationManageComponent} from './destinations/destination-manage/destination-manage.component';
import {TourTableComponent} from './tours/tour-table/tour-table.component';
import {TourManageComponent} from './tours/tour-manage/tour-manage.component';
import {ReservationTableComponent} from './reservation-table/reservation-table.component';

const routes: Routes = [
  {path: '', redirectTo: '/destinations', pathMatch: 'full'},
  {path: 'destinations', component: DestinationTableComponent},
  {path: 'destinations/manage', component: DestinationManageComponent},
  {path: 'destinations/manage/:id', component: DestinationManageComponent},
  {path: 'tours', component: TourTableComponent},
  {path: 'tours/manage', component: TourManageComponent},
  {path: 'tours/manage/:id', component: TourManageComponent},
  {path: 'reservations', component: ReservationTableComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
