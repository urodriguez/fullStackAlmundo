import { Component, Input } from '@angular/core';

@Component({
  selector: 'data-search-handler',
  templateUrl: "app/dataSearchHandler/dataSearchHandlerComponent.html",
  styleUrls: ["app/dataSearchHandler/dataSearchHandlerStyles.css"]
})
export class DataSearchHandlerComponent {
  @Input() destino: string;
  @Input() fechaIngreso: string;
  @Input() fechaSalida: string;
  @Input() cantDeHuespedes: number;


  constructor(){}

  ngOnInit() {
      console.log("destino= " + this.destino);
      console.log("fechaIngreso= " + this.fechaIngreso);
      console.log("fechaSalida= " + this.fechaSalida);
      console.log("cantDeHuespedes= " + this.cantDeHuespedes);
  }
}
