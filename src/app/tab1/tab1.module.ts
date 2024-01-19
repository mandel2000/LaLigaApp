import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { TeamListComponent } from '../pages/team-list/team-list.component';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { TeamComponent } from '../components/team/team.component';
import { TeamDetailPage } from '../pages/team-detail/team-detail.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    TranslateModule
  ],
  declarations: [Tab1Page, TeamListComponent, TeamComponent]
})
export class Tab1PageModule {}
