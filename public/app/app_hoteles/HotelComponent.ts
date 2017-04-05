import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Hotel } from '../models/Hotel';
import { HotelServices } from '../services/HotelServices';

import { Filtrador} from "../filters/Filtrador"
import { FiltradorPorNombre} from "../filters/FiltradorPorNombre"
import { FiltradorPorEstrellas} from "../filters/FiltradorPorEstrellas"
import { FiltradorPorPrecios} from "../filters/FiltradorPorPrecios"

@Component({
  selector: 'hoteles',
  templateUrl: "app/app_hoteles/hotelComponent.html",
  styleUrls: ["app/app_hoteles/hotelComponentStyles.css"]
})

export class HotelComponent {
  private hotelesCache: Hotel[]
  private hoteles: Hotel[]
  private filtrador: Filtrador
  
  constructor(private hService: HotelServices){
    this.hotelesCache = []
    this.hoteles = []

    this.cargarHotelesDisponibles();
  }

  ngOnInit() {
    console.log("ON INIT HOTEL");
  }

  cargarHotelesDisponibles(){
    console.log("CARGANDO HOTELES");
    // en el momento del subscribe es cuando se dispara la llamada
    this.hService
    .getHoteles()
    .subscribe(
      (hoteles) => {
        this.hotelesCache = hoteles;

        this.filtrador = new Filtrador(this.hotelesCache)
        
        this.hoteles = this.hotelesCache

        console.log(this.hotelesCache);
      },
      err => {
        console.error("EL ERROR FUE: ", err)
        alert("\t\t\t\t¡Error al cargar los hoteles!\n\nPulse 'Aceptar' para recargar la pagina");
        window.location.reload(); 
      }
    );
  }


  filterByName(nameToFilter: string){
    //this.hoteles = this.hotelesCache.map(function(hotel) {if(hotel.name.indexOf(nameToFilter) != -1) return hotel})
    this.filtrador.agregarFiltroPorNombre(new FiltradorPorNombre(nameToFilter))

    this.hoteles = this.filtrador.filtrar()
  }

  filterByStars(starsToFilter: number[]){
    console.log("starsToFilter")
    console.log(starsToFilter)

    this.filtrador.agregarFiltroPorEstrellas(new FiltradorPorEstrellas(starsToFilter))

    this.hoteles = this.filtrador.filtrar()
    
  }

  filterByPrice(pricesToFilter: number[]){
    this.filtrador.agregarFiltroPorPrecios(new FiltradorPorPrecios(pricesToFilter))

    this.hoteles = this.filtrador.filtrar()
    
  }
}