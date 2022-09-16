import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { habilidad } from '../interfaces/habilidad.inteface';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
private apiURL= `  http://localhost:3000/habilidades`;
  constructor(private http: HttpClient ) { }
  getProducts():Observable<any>{
    return this.http.get<habilidad>(this.apiURL);
  }
}
