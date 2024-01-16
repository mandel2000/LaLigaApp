import { Component, OnInit } from '@angular/core';
import { TeamResponse } from '../interfaces/interfaces';
import { FavoritesService } from '../services/favorites.service';

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

}
