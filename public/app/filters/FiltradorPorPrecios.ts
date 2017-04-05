import { IFiltro } from "./IFiltro"
import { Hotel } from "../models/Hotel"

export class FiltradorPorPrecios implements IFiltro {
	private preciosAfiltrar: number[]

	constructor(preciosAfiltrar: number[]){
		this.preciosAfiltrar = preciosAfiltrar
	}

	filtrar(hoteles: Hotel[]): Hotel[]{
		console.log("hoteles")
		console.log(hoteles)

		console.log("this.preciosAfiltrar")
		console.log(this.preciosAfiltrar)

		let hotelesFiltrados: Hotel[] = []

		for(let h of hoteles) {
			if(this.preciosAfiltrar[0] <= h.price && h.price <= this.preciosAfiltrar[1]) {
				hotelesFiltrados.push(h)
			}
		}

		console.log("hotelesFiltrados")
		console.log(hotelesFiltrados)

		return hotelesFiltrados
	}
}