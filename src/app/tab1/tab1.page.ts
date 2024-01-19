import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(private router : Router, private menu : MenuService) {}

  openMenu() {
    this.menu.openMenu();
  }

}
