import { Component, OnInit } from '@angular/core';
import { FavoritesService } from 'src/app/services/favorites.service';
import { LaligaapiService } from 'src/app/services/laligaapi.service';
import { LaligaapimockService } from 'src/app/services/laligaapimock.service';
import { InfiniteScrollCustomEvent, ToastController } from '@ionic/angular';
import { TeamResponse } from '../../interfaces/interfaces';
import { IonInfiniteScrollCustomEvent } from '@ionic/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  public teamInfo : TeamResponse | undefined;
  public teamPlayers : any[] = [];
  currentPage : number = 1;
  totalPages : number = 0;
  id : string | null = null;
  dataFinished : boolean = false;

  constructor(private service : LaligaapimockService, private favService : FavoritesService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getTeamInfo(this.id).subscribe((response:any)=> {this.teamInfo = response.response[0];});
    
    this.service.getTeamPlayers(this.id).subscribe((response:any) => {
      this.teamPlayers = response.response; 
      this.totalPages =  response.paging.total; 
      this.dataFinished = this.totalPages==1;
    });
  }

  onFavoriteClick() {

    if(this.isFavorite()){

      this.favService.removeFromFavorites(this.teamInfo);
    }else{
      
      this.favService.saveInFavorites(this.teamInfo);
    }
  }

  isFavorite(){
    return this.favService.isFavorite(this.teamInfo);
  }

  onIonInfinite($event: IonInfiniteScrollCustomEvent<void>) {
    
    if(this.currentPage<this.totalPages){

      this.generateItems();
      setTimeout(() => {
        ($event as InfiniteScrollCustomEvent).target.complete();
      }, 1000);

      this.dataFinished=this.totalPages==this.currentPage;

    }
    

  }

  private  generateItems() {
    
    this.service.getTeamPlayers(this.id, ++this.currentPage).subscribe((response:any) => {
      
      for(let i=0; i<response.response.length; i++){
        this.teamPlayers.push(response.response[i]); 
      }
    });
    
  }
    

  
}
