import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  inscritEtudiant(description: any): Observable<any>{
    return this.http.post('http://localhost:8000/api/inscrit/etudiant', description);
  }
  inscritEnseignant(description: any): Observable<any>{
    return this.http.post('http://localhost:8000/api/inscrit/enseignant', description);
  }
}
