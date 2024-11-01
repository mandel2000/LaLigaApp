import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { MatchComponent } from '../components/match/match.component';
import { MatchListComponent } from '../pages/match-list/match-list.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    TranslateModule
  ],
  declarations: [Tab2Page, MatchComponent, MatchListComponent]
})
export class Tab2PageModule {}
