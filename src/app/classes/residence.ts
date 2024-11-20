import { Apartment } from "./appartement";

export class Residence {
  id: number;
  name: string;
  address: string;
  image: string;
  status: string;
  apartments: Apartment[]; // Liste des appartements dans cette résidence

  constructor(
    id: number,
    name: string,
    address: string,
    image: string,
    status: string,
    apartments: Apartment[] = [] // Initialisation vide
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.image = image;
    this.status = status;
    this.apartments = apartments;
  }
}
