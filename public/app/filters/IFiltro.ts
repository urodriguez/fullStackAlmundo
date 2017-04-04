import { Hotel } from "../models/Hotel"

export interface IFiltro {
	filtrar(hoteles: Hotel[]): Hotel[]
}