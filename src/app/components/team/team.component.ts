import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent  implements OnInit {

  @Output() redirect: EventEmitter<any> = new EventEmitter();

  @Input() team : any;

  constructor(private router : Router) { 

  }

  ngOnInit() {}

  getRouterPath(){
    return "/laliga/equipo/" + this.team.id;
  }

}
