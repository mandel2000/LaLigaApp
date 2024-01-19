import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../interfaces/interfaces';
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

  async showLoading() {
    
    this.loading = await this.loadingCtrl.create({
      message: '',
    
    });

    await this.loading.present();
  }

  async hideLoading(){
    await this.loading.dismiss();
    
  }
}
