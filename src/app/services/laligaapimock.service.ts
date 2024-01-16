import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../interfaces/interfaces';

const jsonUrl = '../../assets/json';

@Injectable({
  providedIn: 'root'
})
export class LaligaapimockService {

  constructor(private http : HttpClient) { }

  getLaLigaTeams(){
    return this.http.get(jsonUrl + '/LaLigaTeams.json');
  }

  getStandings(){
    return this.http.get(jsonUrl + '/LaLigaStandings.json');
  }

  getMatches(){
    return this.http.get(jsonUrl + '/LaLigaMatches.json');
  }

  getTeamInfo(id : string | null){
    return this.http.get<RootObject>(jsonUrl + '/TeamInfo.json');
  }

  getTeamPlayers(id : string | null, page? : number){
    return this.http.get(jsonUrl + '/Players' + (page?page:"") + '.json');
  }
}
