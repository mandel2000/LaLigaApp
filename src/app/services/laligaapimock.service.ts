import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../interfaces/interfacesTeams';
import { LoadingController } from '@ionic/angular';

const jsonUrl = '../../assets/json';

@Injectable({
  providedIn: 'root'
})
export class LaligaapimockService {

  loading : any;

  constructor(private http : HttpClient, private loadingCtrl: LoadingController) { }

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
