import { Component, Input } from '@angular/core';

@Component({
  selector: 'router-handler',
  templateUrl: "app/routerHandler/routerHandlerComponent.html",
  styleUrls: ["app//routerHandler/routerHandlerStyles.css"]
})
export class RouterHandlerComponent {
  @Input() modulo: string;
  @Input() destino: string;

  constructor(){}

  ngOnInit() {
      console.log("modulo= " + this.modulo);
      console.log("destino= " + this.destino);
  }
}
