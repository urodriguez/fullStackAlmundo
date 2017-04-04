import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'name-filter',
  templateUrl: "app/nameFilter/nameFilterComponent.html",
  styleUrls: ["app/nameFilter/nameFilterStyles.css"]
})
export class NameFilterComponent {
  @Output() onNameFilterChange: EventEmitter<string>

  constructor(){
    this.onNameFilterChange = new EventEmitter<string>()
  }

  ngOnInit() {
  }

  fireNameFilterChange(nameToFilter: string){
    this.onNameFilterChange.emit(nameToFilter)
  }
}
