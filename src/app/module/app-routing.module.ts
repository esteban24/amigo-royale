import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { HomeComponent } from '../component/home.component';
import { CardComponent } from '../component/card.component';

/**
 * @type {Routes}
 */
const appRoutes: Routes = [
  { path: 'home',   component: HomeComponent },
  { path: 'cards',  component: CardComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

/**
 * Route module
 *
 * @author Esteban Martín <esteban.martin.busto@gmail.com>
 */
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
