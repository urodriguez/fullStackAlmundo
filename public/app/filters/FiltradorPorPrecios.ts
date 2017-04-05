import { IFiltro } from "./IFiltro"
import { Hotel } from "../models/Hotel"

export class FiltradorPorPrecios implements IFiltro {
	private preciosAfiltrar: number[]

	constructor(preciosAfiltrar: number[]){
		this.preciosAfiltrar = preciosAfiltrar
	}

	filtrar(hoteles: Hotel[]): Hotel[]{
		let hotelesFiltrados: Hotel[] = []

		for(let h of hoteles) {
			if(this.preciosAfiltrar[0] <= h.price && h.price <= this.preciosAfiltrar[1]) {
				hotelesFiltrados.push(h)
			}
		}

		return hotelesFiltrados
	}
}