// Importation des modules nécessaires depuis Angular et des services et classes personnalisés
import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../service/residence.service'; // Importation du service qui gère les résidences
import { Residence } from '../classes/residence'; // Importation de la classe ou de l'interface Residence

// Déclaration du composant Angular
@Component({
  selector: 'app-residence', // Nom du sélecteur utilisé pour insérer ce composant dans un template HTML
  templateUrl: './residence.component.html', // Chemin du fichier HTML associé à ce composant
  styleUrls: ['./residence.component.css'] // Chemin du fichier CSS pour styliser ce composant
})
export class ResidenceComponent implements OnInit { 
  // Déclaration de la propriété residences comme un tableau de Résidences vide
  residences: Residence[] = [];

  // Injection du service ResidenceService via le constructeur
  constructor(private rsService: ResidenceService) {
    // rsService est une instance du service ResidenceService, utilisée pour récupérer les données des résidences
  }

  // Méthode pour récupérer les données des résidences depuis le service
  getResidence() {
    // Appel de la méthode getResidence du service pour récupérer les données (observable)
    this.rsService.getResidence().subscribe(data => {
      // Mise à jour de la propriété residences avec les données récupérées
      console.log(data);
      this.residences = data;
    });
  }

  // Méthode ngOnInit : méthode de cycle de vie appelée au moment de l'initialisation du composant
  ngOnInit() {
    // Appel de la méthode getResidence pour charger les données des résidences dès que le composant est initialisé
    this.getResidence();
  }
}
