import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
})
export class MatchComponent  implements OnInit {

  @Input() match : any;

  constructor() { }

  ngOnInit() {
    console.log(this.match);
  }

  getDate(){

    let date = new Date(this.match.fixture.date);
    return date.getDate().toString().padStart(2, '0') + '/' + (date.getMonth()+1).toString().padStart(2, '0') + '/' + date.getFullYear();
  }

  getTime(){

    let date = new Date(this.match.fixture.date);
    return date.getUTCHours().toString().padStart(2, '0') + ':' + date.getUTCMinutes().toString().padStart(2, '0');

  }

  hasBeenPlayed(){
    return !(this.match.fixture.status.short === 'NS');
  }

}
