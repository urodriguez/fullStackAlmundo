import { IFiltro } from "./IFiltro"
import { Hotel } from "../models/Hotel"

export class FiltradorPorNombre implements IFiltro {
	private nombreAfiltrar: string

	constructor(nombreAfiltrar: string){
		this.nombreAfiltrar = nombreAfiltrar
	}

	filtrar(hoteles: Hotel[]): Hotel[]{
		let hotelesFiltrados: Hotel[] = []

		console.log("filtrando por nombre: " + this.nombreAfiltrar + " los hoteles=")
		console.log(hoteles)

		for(let h of hoteles) {
			if(h.name.indexOf(this.nombreAfiltrar) != -1) {
				hotelesFiltrados.push(h)
			}
		}

		console.log("hotelesFiltrados")
		console.log(hotelesFiltrados)

		return hotelesFiltrados
	}
}