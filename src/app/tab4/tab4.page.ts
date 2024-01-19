import { Component, OnInit } from '@angular/core';
import { TeamResponse } from '../interfaces/interfaces';
import { FavoritesService } from '../services/favorites.service';
import { SearchbarInputEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  teams : TeamResponse[]  = [];

  constructor(private favoritesService : FavoritesService) { }

  ngOnInit() {
    this.favoritesService.loadFavorites();
    this.teams = this.favoritesService.favs;
  }

  ionViewDidEnter() {
    this.teams = this.favoritesService.favs;;
  }

  removeFavorite(team : TeamResponse) {
    this.favoritesService.removeFromFavorites(team);
    this.teams = this.favoritesService.favs;
  }

  onSearch($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {

    const query = $event?.target?.value?.toLowerCase();

    this.teams = this.favoritesService.favs.filter((team : any) => {return team.team.name.toLowerCase().includes(query);});

  }

  getRouterPath(id: number) {
    return "/laliga/equipos/equipo/" + id;
  }
    

}
