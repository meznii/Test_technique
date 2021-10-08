import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  inscritEtudiant(description: any): Observable<any>{
    const body = JSON.stringify(description);
    return this.http.post('http://localhoast:3000/api/inscription', body);
  }
}
