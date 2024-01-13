import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LaligaapimockService } from 'src/app/services/laligaapimock.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent  implements OnInit {

  @Output() redirect: EventEmitter<any> = new EventEmitter();

  public teams = [];

  constructor(private service : LaligaapimockService) { }

  ngOnInit() {
    this.service.getLaLigaTeams().subscribe((response : any) => this.teams = response.api.teams);
  }

}
