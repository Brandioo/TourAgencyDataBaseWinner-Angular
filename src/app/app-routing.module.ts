import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ClientTableComponent} from './clients/client-table/client-table.component';
import {ClientManageComponent} from './clients/client-manage/client-manage.component';
import {DestinationTableComponent} from './destinations/destination-table/destination-table.component';
import {DestinationManageComponent} from './destinations/destination-manage/destination-manage.component';

const routes: Routes = [
  {path: '', redirectTo: '/destinations', pathMatch: 'full'},
  {path: 'destinations', component: DestinationTableComponent},
  {path: 'destinations/manage', component: DestinationManageComponent},
  {path: 'destinations/manage/:id', component: DestinationManageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
