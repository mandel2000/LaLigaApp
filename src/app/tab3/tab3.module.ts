import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { RouterModule } from '@angular/router';
import { StandingsTableComponent } from '../components/standings-table/standings-table.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab3PageRoutingModule,
    RouterModule,
    TranslateModule
  ],
  declarations: [Tab3Page, StandingsTableComponent]
})
export class Tab3PageModule {}
