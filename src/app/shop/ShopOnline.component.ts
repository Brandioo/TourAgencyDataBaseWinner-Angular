import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './ShopOnline.component.html',
  styleUrls: ['./ShopOnline.component.css']
})
export class ShopOnlineComponent implements OnInit, OnChanges, OnDestroy {
  @Input() user: any;
  constructor() { }

  ngOnInit(){
    console.log(this.user);
  }

  ngOnChanges(){
    console.log('change')
  }

  ngOnDestroy(){
    console.log('destroy')
  }

}
