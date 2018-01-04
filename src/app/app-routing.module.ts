import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path:
    'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
   ],

  exports: [
    RouterModule
   ]
})
export class AppRoutingModule {}