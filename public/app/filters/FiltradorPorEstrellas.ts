import { IFiltro } from "./IFiltro"
import { Hotel } from "../models/Hotel"

export class FiltradorPorEstrellas implements IFiltro {
	private estrellasAfiltrar: number[]

	constructor(estrellasAfiltrar: number[]){
		this.estrellasAfiltrar = estrellasAfiltrar
	}

	filtrar(hoteles: Hotel[]): Hotel[]{
		let hotelesFiltrados: Hotel[] = []

		if(this.estrellasAfiltrar.length == 0) {
			//No hubo filtro aplicado
			return hoteles
		} else {
			for(let h of hoteles) {
				for (let s of this.estrellasAfiltrar) {
					if(h.stars == s) {
						hotelesFiltrados.push(h)
						break
					}
				}
			}

			console.log("hotelesFiltrados")
			console.log(hotelesFiltrados)

			return hotelesFiltrados
		}
	}
}