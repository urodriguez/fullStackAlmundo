import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Hotel } from '../models/Hotel';
import { HotelServices } from '../services/HotelServices';

@Component({
  selector: 'hoteles',
  templateUrl: "app/app_hoteles/hotelComponent.html",
  styleUrls: ["app/app_hoteles/hotelComponentStyles.css"]
})

export class HotelComponent {
  private hotelesDisponibles: Hotel[];
  
  constructor(private hService: HotelServices){
    this.hotelesDisponibles = []
  }

  ngOnInit() {
    console.log("ON INIT");
    this.cargarHotelesDisponibles();
  }

  cargarHotelesDisponibles(){
    console.log("CARGANDO HOTELES");
    // en el momento del subscribe es cuando se dispara la llamada
    this.hService
    .getHoteles()
    .subscribe(
      (hoteles) => {
        this.hotelesDisponibles = hoteles;
        console.log(this.hotelesDisponibles);
      },
      err => {
        console.error("EL ERROR FUE: ", err)
        alert("\t\t\t\t¡Error al cargar los hoteles!\n\nPulse 'Aceptar' para recargar la pagina");
        window.location.reload(); 
      }
    );
  }
}