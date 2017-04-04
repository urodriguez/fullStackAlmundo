import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Hotel } from "../models/Hotel"

@Component({
  selector: 'name-filter',
  templateUrl: "app/nameFilter/nameFilterComponent.html",
  styleUrls: ["app/nameFilter/nameFilterStyles.css"]
})
export class NameFilterComponent {
  @Input() hotelsToFilter: Hotel[]
  @Output() onNameFilterChange: EventEmitter<Hotel[]>

  constructor(){
    this.onNameFilterChange = new EventEmitter<Hotel[]>()
  }

  ngOnInit() {}

  fireNameFilterChange(nameToFilter: string){
    this.onNameFilterChange.emit(this.hotelsToFilter.map(function(hotel) {if(hotel.name.indexOf(nameToFilter) != -1) return hotel}))
  }
}
