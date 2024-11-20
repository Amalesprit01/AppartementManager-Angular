import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from '../classes/residence';


@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
  //déclaration de l'api 
  private apiUrl = 'assets/data.json';

  constructor(private  httpclient:HttpClient) { 
  }
  //get residence retourne une liste de données comme etant un observable
  getResidence(): Observable <Residence[]>{
    return this.httpclient.get<Residence[]>(this.apiUrl);
  }
  


  

}
