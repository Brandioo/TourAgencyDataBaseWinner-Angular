import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-shop-online',
  templateUrl: './shop-online.component.html',
  styleUrls: ['./shop-online.component.css']
})
export class ShopOnlineComponent implements OnInit, OnChanges, OnDestroy {
  constructor() { }
  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;
  isLoggedIn = false;
  @Input() user: any;
  // tslint:disable-next-line:typedef
  onChoseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    // @ts-ignore
    console.log(this.user);
  }
  // tslint:disable-next-line:typedef
  ngOnChanges(){
    // @ts-ignore
    console.log('change');
  }
  // tslint:disable-next-line:typedef
  ngOnDestroy(){
    // @ts-ignore
    console.log('destroy');
  }
}
