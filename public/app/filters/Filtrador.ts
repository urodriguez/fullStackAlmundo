import { IFiltro } from "./IFiltro"

import { Hotel } from "../models/Hotel"

const CANT_FILTROS_DISPONIBLES = 3

export class Filtrador {
	private hoteles: Hotel[]
	private filtros: IFiltro[]

	constructor(hoteles: Hotel[]){
		this.hoteles = []
		console.log(hoteles)

		for (var i = 0; i < hoteles.length; ++i) {
			this.hoteles
			.push(
				new Hotel(
					hoteles[i]._id,
					hoteles[i].name,
					hoteles[i].stars,
					hoteles[i].price,
				))
		}

		this.filtros = []
		for (var i = 0; i < CANT_FILTROS_DISPONIBLES; ++i) {
			this.filtros.push(undefined)
		}
	}

	agregarFiltroPorNombre(filtro: IFiltro){
		this.filtros[0] = filtro
	}

	agregarFiltroPorPrecios(filtro: IFiltro){
		this.filtros[1] = filtro
	}

	agregarFiltroPorEstrellas(filtro: IFiltro){
		this.filtros[2] = filtro
	}

	filtrar(): Hotel[]{
		let hotelesAfiltrar: Hotel[] = this.hoteles.slice(0)

		for(let filtro of this.filtros){
			if(filtro != undefined) {
				hotelesAfiltrar = filtro.filtrar(hotelesAfiltrar)
			}
		}

		return hotelesAfiltrar
	}
}