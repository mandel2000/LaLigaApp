import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { LaligaapiService } from 'src/app/services/laligaapi.service';
import { LaligaapimockService } from 'src/app/services/laligaapimock.service';
import { ToastController } from '@ionic/angular';
import { TeamResponse } from '../../interfaces/interfaces';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {


  public teamInfo : TeamResponse | undefined;
  public teamPlayers : any[] = [];

  constructor(private service : LaligaapimockService, private favService : FavoritesService, public toastController : ToastController) { }

  ngOnInit() {
    this.service.getTeamInfo().subscribe((response:any)=> {this.teamInfo = response.response[0];});
    this.service.getTeamPlayers().subscribe((response:any) => {this.teamPlayers = response.response});
  }

  onFavoriteClick() {

    if(this.isFavorite()){

      this.favService.removeFromFavorites(this.teamInfo);
      this.presentToast("Equipo eliminado de favoritos.");
    }else{
      
      this.favService.saveInFavorites(this.teamInfo);
      this.presentToast("Equipo guardado en favoritos.");
    }
  }

  isFavorite(){
    return this.favService.isFavorite(this.teamInfo);
  }

  async presentToast(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
    });
  }
}
