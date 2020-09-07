import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  gotoPage(pageId: string) {
    this.router.navigate([pageId]); //   /docs/4.0/navbar   ['test']

    /* this.router.navigateByUrl('/auth/login')
    this.router.navigate(['auth','login']); */
  }

  praba() {
    window.alert('button clicked');
  }

  // constructor
  constructor(public router: Router) {
  }

  // life cycle hook method
  ngOnInit() {
    console.log('ngoninit');
  }

  ngOnDestroy() {
    console.log('before destory..')
  }

}
