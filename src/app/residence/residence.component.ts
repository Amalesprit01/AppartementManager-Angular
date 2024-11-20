// Importation des modules nécessaires depuis Angular et des services et classes personnalisés
import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../service/residence.service'; // Importation du service qui gère les résidences
import { Residence } from '../classes/residence'; // Importation de la classe ou de l'interface Residence
import { Apartment } from '../classes/appartement';

// Déclaration du composant Angular
@Component({
  selector: 'app-residence', // Nom du sélecteur utilisé pour insérer ce composant dans un template HTML
  templateUrl: './residence.component.html', // Chemin du fichier HTML associé à ce composant
  styleUrls: ['./residence.component.css'], // Chemin du fichier CSS pour styliser ce composant
})
export class ResidenceComponent implements OnInit {
  // Déclaration de la propriété residences comme un tableau de Résidences vide
  residences: Residence[] = [];
  selectedResidence: Residence | null = null;
  searchSurface: number | null = null;
  filteredApartments!: Apartment[] | null;


  // Injection du service ResidenceService via le constructeur
  constructor(private rsService: ResidenceService) {
    // rsService est une instance du service ResidenceService, utilisée pour récupérer les données des résidences
  }

  // Méthode pour récupérer les données des résidences depuis le service
  getResidence() {
    // Appel de la méthode getResidence du service pour récupérer les données (observable)
    this.rsService.getResidence().subscribe((data) => {
      // Mise à jour de la propriété residences avec les données récupérées
      this.residences = data;
    });
  }

  // Méthode pour sélectionner une résidence
  selectResidence(residence: Residence) {
    this.filteredApartments = null;
    this.searchSurface = null;
    this.selectedResidence = residence;
  }

  buyApartment(index: number, apt: Apartment) {
    alert(`Appartement ${apt.apartNum} acheté avec succès !`);
    if (this.selectedResidence) {
      const apartment = this.selectedResidence.apartments[index];
      // Logique de suppression
      this.selectedResidence.apartments.splice(index, 1);
      // Optionnel : Afficher une notification ou effectuer d'autres actions
      console.log(
        `Appartement ${apartment.apartNum} acheté et retiré de la liste.`
      );
    } else if (this.filteredApartments) {
      if (this.filteredApartments) {
        this.filteredApartments.splice(index, 1);
      }
    
      // Parcourir les résidences pour retirer l'appartement
      for (const residence of this.residences) {
        const aptIndex = residence.apartments.findIndex(
          (resApt) => resApt.apartNum === apt.apartNum
        );
        if (aptIndex !== -1) {
          residence.apartments.splice(aptIndex, 1);
          break; // Sortir une fois trouvé et retiré
        }
      }
    }
  }

  searchApartment() {
    this.selectedResidence = null;
    if (this.searchSurface !== null) {
      // Parcourir toutes les résidences
      const allApartments = this.residences.flatMap((res) => res.apartments);
      
      // Filtrer les appartements par surface
      const filteredApartments = allApartments.filter(
        (apt) => apt.surface === this.searchSurface
      );
  
      if (filteredApartments.length > 0) {
        this.filteredApartments = filteredApartments;
        alert(`Appartements trouvés : ${filteredApartments.length}`);
      } else {
        alert('Aucun appartement trouvé avec cette surface.');
        this.filteredApartments = []; // Réinitialiser si aucun résultat
      }
    } else {
      alert('Veuillez entrer une surface valide.');
      this.filteredApartments = []; // Réinitialiser si aucune surface saisie
    }
  }

  // Méthode ngOnInit : méthode de cycle de vie appelée au moment de l'initialisation du composant
  ngOnInit() {
    // Appel de la méthode getResidence pour charger les données des résidences dès que le composant est initialisé
    this.getResidence();
  }
}
