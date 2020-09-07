import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModalModule, NgbAccordion, NgbAccordionModule, NgbAlertModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsComponent } from './cars/cars.component';
import { BikesComponent } from './bikes/bikes.component';
import { EBikesComponent } from './e-bikes/e-bikes.component';
import { ECarsComponent } from './e-cars/e-cars.component';
import { HVehiclesComponent } from './h-vehicles/h-vehicles.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    BikesComponent,
    EBikesComponent,
    ECarsComponent,
    HVehiclesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    NgbCarouselModule,
    NgbModalModule,
    NgbAccordionModule,
    NgbAlertModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
