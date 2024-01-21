import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { TeamDetailPage } from '../pages/team-detail/team-detail.page';

const routes: Routes = [
  {
    path: 'laliga',
    component: TabsPage,
    children: [
      {
        path: 'equipos',
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule),
        
      },
      {
        path: 'partidos',
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'clasificacion',
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'favoritos',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'equipo/:id',
        loadChildren: () => import('../pages/team-detail/team-detail.module').then(m => m.TeamDetailPageModule)
      },
      {
        path: '',
        redirectTo: '/laliga/equipos',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/laliga/equipos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
