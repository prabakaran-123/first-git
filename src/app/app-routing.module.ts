import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikesComponent } from './bikes/bikes.component';
import {CarsComponent} from './cars/cars.component'
import{HVehiclesComponent} from './h-vehicles/h-vehicles.component'
import { EBikesComponent } from './e-bikes/e-bikes.component';
import { ECarsComponent } from './e-cars/e-cars.component';

const routes: Routes = [
  { path: '', redirectTo: 'bikes', pathMatch: 'full' },
  { path: 'bikes', component: BikesComponent },
  { path: 'cars', component:  CarsComponent },
  { path: 'e-bikes', component: EBikesComponent },
  { path: 'h-vehicles', component:  HVehiclesComponent, },
  { path: 'e-cars', component: ECarsComponent },
  { path: '**', redirectTo: 'bikes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
