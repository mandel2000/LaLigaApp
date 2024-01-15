import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LaligaapimockService } from 'src/app/services/laligaapimock.service';

@Component({
  selector: 'app-standings-table',
  templateUrl: './standings-table.component.html',
  styleUrls: ['./standings-table.component.scss'],
})
export class StandingsTableComponent  implements OnInit {

  public standings : any[] = [];

  constructor(private service : LaligaapimockService) { }

  ngOnInit() {

    this.service.getStandings().subscribe((response : any) =>{ this.standings = response.response[0].league.standings[0]; console.log(this.standings[0]);});
    
  }

}
