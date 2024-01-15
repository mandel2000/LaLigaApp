import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const apiKey = environment.apiKey;
const apiHost = environment.apiHost;
const apiUrl = environment.apiUrl;

const headers = {
  "X-RapidApi-Key" : apiKey,
  "X-RapidApi-Host" : apiHost
};


@Injectable({
  providedIn: 'root'
})
export class LaligaapiService {

  constructor(private http: HttpClient) { }

  

  getLaLigaTeams(){
    return this.http.get(apiUrl + '/teams/league/30', {headers : headers});
  }

  getStandings(){
    return this.http.get(apiUrl + '/leagueTable/30', {headers : headers});
  }


}
