import { Component, OnInit } from '@angular/core';
import { LaligaapimockService } from 'src/app/services/laligaapimock.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss'],
})
export class MatchListComponent  implements OnInit {

  public matches : any[] = [];

  constructor(private service : LaligaapimockService) { }

  ngOnInit() {

    this.service.getMatches().subscribe((response : any) => this.matches = response.response);

  }

  

}
