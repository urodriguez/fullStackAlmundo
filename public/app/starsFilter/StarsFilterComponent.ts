import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hotel} from '../models/Hotel';

const NUMBER_OF_STARS = 5

@Component({
  selector: 'stars-filter',
  templateUrl: "app/starsFilter/starsFilterComponent.html",
  styleUrls: ["app/starsFilter/starsFilterStyles.css"]
})
export class StarsFilterComponent {
  @Input() hotels: Hotel[]
  @Output() onStarsFilterChange: EventEmitter<number[]>

  private numberStarsPerHotel: number[]
  private availableStars: number[]
  private filteredStars: number[]

  private showingAllStars: boolean

  private starsDOM: Array<Array<number>>

  private showingBody: boolean

  constructor(){
    this.onStarsFilterChange = new EventEmitter<number[]>()

    this.availableStars = []
    this.numberStarsPerHotel = []
    this.starsDOM = new Array<Array<number>>(NUMBER_OF_STARS)
    for (var i = NUMBER_OF_STARS; i > 0; --i) {
      this.availableStars.push(i)
      this.numberStarsPerHotel.push(0)
    }

    //console.log(this.availableStars)

    for (var j = 0; j < this.availableStars.length; ++j) {
    	this.starsDOM[j] = new Array(this.availableStars[j]);
    }

    this.filteredStars = []

    this.showingAllStars = true

    this.showingBody = true
  }

  ngOnChanges(){
    for (var i = 0; i < this.hotels.length; ++i) {
      this.numberStarsPerHotel[NUMBER_OF_STARS - this.hotels[i].stars]++
    }
  }

  changeStatusBody(){
    this.showingBody = (this.showingBody ? false : true)
  }
  
  noFiltersAplied(){
  	this.showingAllStars = true

    this.filteredStars = []

    //fires stars filter change
    this.onStarsFilterChange.emit(this.filteredStars)
  }

  onFilteredStarsChange(valueStar:number, valueCheck: boolean){
  	//console.log(valueStar + "-" + valueCheck)
    if(valueCheck == true) {
      this.filteredStars.push(NUMBER_OF_STARS - valueStar)
    } else {
      let index = 0;
      for(let filteredStar of this.filteredStars){
        if(filteredStar == (NUMBER_OF_STARS - valueStar)) {
          this.filteredStars.splice(index, 1);
        } else {
          index++;
        }
      }
    }

    this.showingAllStars = (this.filteredStars.length == 0)

/*    console.log("this.filteredStars")
    console.log(this.filteredStars)*/

    //fires stars filter change
    this.onStarsFilterChange.emit(this.filteredStars)

  }

  wasSelected(valueStar:number): boolean {
  	return (this.filteredStars.indexOf(NUMBER_OF_STARS - valueStar) != -1)
  }

}
