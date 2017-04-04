import { IFiltro } from "./IFiltro"

import { Hotel } from "../models/Hotel"

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
		this.filtros = [undefined, undefined, undefined]
	}

	agregarFiltroPorNombre(filtro: IFiltro){
		this.filtros[0] = filtro
	}

	agregarFiltroPorPrecio(filtro: IFiltro){
		this.filtros[1] = filtro
	}

	agregarFiltroPorEstrellas(filtro: IFiltro){
		this.filtros[2] = filtro
	}

	filtrar(): Hotel[]{
		let hotelesAfiltrar: Hotel[] = this.hoteles.slice(0)

		console.log(hotelesAfiltrar)
		
		for(let filtro of this.filtros){
			if(filtro != undefined) {
				hotelesAfiltrar = filtro.filtrar(hotelesAfiltrar)
			}
		}

		return hotelesAfiltrar
	}
}