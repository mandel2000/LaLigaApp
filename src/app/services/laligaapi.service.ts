import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RootObject } from '../interfaces/interfacesTeams';

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
    return this.http.get(apiUrl + '/teams?league=140&season=2023', {headers : headers});
  }

  getStandings(){
    return this.http.get(apiUrl + '/standings?season=2023&league=140', {headers : headers});
  }

  getMatches(){
    return this.http.get(apiUrl + '/fixtures?league=140&season=2023', {headers : headers});
  }

  getTeamInfo(id : string | null){
    return this.http.get<RootObject>(apiUrl + '/teams?league=140&id=' + id + '&season=2023', {headers : headers});
  }

  getTeamPlayers(id : string | null, page? : number){
    return this.http.get(apiUrl + '/players?team=' + id + '&season=2023&page=' + page, {headers : headers});
  }


}
