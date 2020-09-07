import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-h-vehicles',
  templateUrl: './h-vehicles.component.html',
  styleUrls: ['./h-vehicles.component.scss']
})
export class HVehiclesComponent implements OnInit {

  model: NgbDateStruct;
  date: { year: number, month: number };

imageAddr='https://media.wired.com/photos/5d09594a62bcb0c9752779d9/1:1/w_1500,h_1500,c_limit/Transpo_G70_TA-518126.jpg';
  constructor() { }

  ngOnInit() {

  }
}

