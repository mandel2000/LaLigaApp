import { Component, OnInit } from '@angular/core';
import { LaligaapiService } from 'src/app/services/laligaapi.service';
import { LaligaapimockService } from 'src/app/services/laligaapimock.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {

  public teamInfo : any;
  public teamPlayers : any[] = [];

  constructor(private service : LaligaapimockService) { }

  ngOnInit() {
    this.service.getTeamInfo().subscribe((response:any)=> {this.teamInfo = response.response[0];});
    this.service.getTeamPlayers().subscribe((response:any) => {this.teamPlayers = response.response});
  }

}
