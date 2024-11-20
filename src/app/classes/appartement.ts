import { Residence } from "./residence";

export class Apartment {
  apartNum: number;
  floorNum: number;
  surface: number;
  terrace: boolean;
  surfaceTerrace: number;
  category: string;
  residence: Residence; // Une seule résidence

  constructor(
    apartNum: number,
    floorNum: number,
    surface: number,
    terrace: boolean,
    surfaceTerrace: number,
    category: string,
    residence: Residence
  ) {
    this.apartNum = apartNum;
    this.floorNum = floorNum;
    this.surface = surface;
    this.terrace = terrace;
    this.surfaceTerrace = surfaceTerrace;
    this.category = category;
    this.residence = residence;
  }
}
