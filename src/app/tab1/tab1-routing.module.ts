import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { TeamDetailPageModule } from '../pages/team-detail/team-detail.module';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [{
      path: 'equipo',
      loadChildren: () => import('../pages/team-detail/team-detail.module').then(m => m.TeamDetailPageModule)
    }]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
