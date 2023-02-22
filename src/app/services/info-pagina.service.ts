import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interfaces';


@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any = [];  

  constructor ( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo () {

    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina ) => {
      this.cargada = true;
      this.info = resp;
      });
    }

private cargarEquipo() { 

    this.http.get('https://portafolio-angular-bfa50-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
    .subscribe( resp => {
    this.equipo = resp;
      console.log(resp);
    });
  }
}