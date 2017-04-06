import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'name-filter',
  templateUrl: "app/nameFilter/nameFilterComponent.html",
  styleUrls: ["app/nameFilter/nameFilterStyles.css"]
})
export class NameFilterComponent {
  @Output() onNameFilterChange: EventEmitter<string>

  private showingBody: boolean

  constructor(){
    this.onNameFilterChange = new EventEmitter<string>()
    this.showingBody = true
  }

  ngOnInit() {
  }

  changeStatusBody(){
    this.showingBody = (this.showingBody ? false : true)
  }

  fireNameFilterChange(nameToFilter: string){
    this.onNameFilterChange.emit(nameToFilter)
  }
}
