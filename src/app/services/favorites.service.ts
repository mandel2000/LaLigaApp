import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { TeamResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private _storage: Storage | null = null;

  favs : TeamResponse[] = [];

  constructor(private storage : Storage) {
    this.init();
  }

  saveInFavorites(team : TeamResponse | undefined){

    const exists = this.isFavorite(team);

    if(!exists){
      this.favs.unshift(team!);
      this.set('favs', this.favs);
    }
  }

  removeFromFavorites(team : TeamResponse | undefined){
    
    this.favs = this.favs.filter(teamFav => team?.team.id !== teamFav.team.id);

    this.set('favs', this.favs);
  }

  isFavorite(team : TeamResponse | undefined){
    return (this.favs.find(teamFav => team?.team.id === teamFav.team.id));
  }

  async loadFavorites(){
    const favs = await this.storage.get('favs');

    if(favs){
      this.favs = favs;
    }
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }


  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }
}
