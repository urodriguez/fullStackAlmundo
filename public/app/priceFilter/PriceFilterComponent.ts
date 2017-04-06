import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hotel} from '../models/Hotel';

declare var noUiSlider: any;

@Component({
  selector: 'price-filter',
  templateUrl: "app/priceFilter/priceFilterComponent.html",
  styleUrls: ["app/priceFilter/priceFilterStyles.css"]
})
export class PriceFilterComponent {
  @Input() hotels: Hotel[]
  @Output() onPriceFilterChange: EventEmitter<any>

  private minPrice: number
  private maxPrice: number

  private showingBody: boolean

  constructor(){
    this.onPriceFilterChange = new EventEmitter<any>()
    this.showingBody = true
  }

  getMinPrice(){
    this.minPrice = this.hotels[0].price
    for(let h of this.hotels){
      if(h.price < this.minPrice) {
        this.minPrice = h.price
      }
    }
  }

  getMaxPrice(){
    this.maxPrice = this.hotels[0].price
    for(let h of this.hotels){
      if(h.price > this.maxPrice) {
        this.maxPrice = h.price
      }
    }
  }

  ngOnInit() {
    console.log("ON INIT PRICE");
  }

  changeStatusBody(){
    this.showingBody = (this.showingBody ? false : true)
  }

  ngOnChanges() {
    if(this.hotels.length != 0) {
      this.getMinPrice()
      this.getMaxPrice()

      var slider = <any> document.getElementById('slider');

      noUiSlider.create(slider, {
        start: [this.minPrice, this.maxPrice],
        step: 1,
        connect: true,
        range: {
          'min': this.minPrice - 100,
          'max': this.maxPrice + 100
        },
      	format: {
        	to: function ( value:any ) {
          	return value;
        	},
        	from: function ( value:any ) {
          	return value.replace('', '');
        	}
      	}
      });

      slider.noUiSlider.on('update', this.OnDataUpdate.bind(this));
    }

  }

  OnDataUpdate: any  = (values: any, handle:any) : void => {
    if(handle == 0) {//min
      this.minPrice = values[0]
    } else { //max
      this.maxPrice = values[1]  
    }

    this.firePriceFilterChange(values)
  }

  firePriceFilterChange(pricesToFilter: number[]){
    this.onPriceFilterChange.emit(pricesToFilter)
  }
}
