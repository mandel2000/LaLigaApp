import { Component } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private menu : MenuService) {}

  openMenu() {
    this.menu.openMenu();
  }

}
