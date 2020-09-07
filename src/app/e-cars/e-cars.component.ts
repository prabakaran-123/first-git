import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-e-cars',
  templateUrl: './e-cars.component.html',
  styleUrls: ['./e-cars.component.scss']
})
export class ECarsComponent implements OnInit {

  constructor(private ngbModal: NgbModal) { }

  ngOnInit() {
  }
  openModal() {
  }

}
