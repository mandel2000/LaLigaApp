import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoadingController, SearchbarInputEventDetail } from '@ionic/angular';
import { IonSearchbarCustomEvent } from '@ionic/core';
import { LaligaapiService } from 'src/app/services/laligaapi.service';
import { LaligaapimockService } from 'src/app/services/laligaapimock.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent  implements OnInit {


  public teams : any[] = [];
  public allTeams = [];

  constructor(private service : LaligaapiService, private loadingCtrl : LoadingController) { }

  ngOnInit() {
    
    this.service.getLaLigaTeams().subscribe((response : any) => {
      
      this.allTeams = response.response;
      this.teams = [...this.allTeams];
    });
  }

  onSearch($event: IonSearchbarCustomEvent<SearchbarInputEventDetail>) {

    const query = $event?.target?.value?.toLowerCase();

    this.teams = this.allTeams.filter((team : any) => {return team.team.name.toLowerCase().includes(query);});

  }

  
}
