import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const jsonUrl = '../../assets/json';

@Injectable({
  providedIn: 'root'
})
export class LaligaapimockService {

  constructor(private http : HttpClient) { }

  getLaLigaTeams(){
    return this.http.get(jsonUrl + '/LaLigaTeams.json');
  }
}
