import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModalConfig, NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss']
})
export class BikesComponent implements OnInit {
  
  @ViewChild('content', { static: true }) praba;
  myImages = [
    { src: 'https://rb.gy/piin2j', header: 'First slide label', body: 'First Nulla vitae elit libero, a pharetra augue mollis interdum.' },
    { src: 'https://picsum.photos/id/1011/900/500', header: 'Second slide label', body: 'Second Nulla vitae elit libero, a pharetra augue mollis interdum.' },
    { src: 'https://picsum.photos/id/984/900/500', header: 'Third slide label', body: 'Third Nulla vitae elit libero, a pharetra augue mollis interdum.' }
  ];
  
  constructor(private config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = true;
  }

  open() {
    this.modalService.open('', { backdrop: 'static', size: 'lg', keyboard: false, centered: true });
  }

  ngOnInit() {
  }

}

