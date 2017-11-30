import { NgModule } from '@angular/core';

import {
	MatCardModule,
	MatRadioModule,
	MatSliderModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatProgressSpinnerModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatGridListModule,
} from '@angular/material';

/**
 * Mat Module
 *
 * @author Esteban Martín <esteban.martin.busto@gmail.com>
 */
@NgModule({
  imports: [
  	MatCardModule,
  	MatRadioModule,
  	MatSliderModule,
  	MatButtonModule,
  	MatButtonToggleModule,
  	MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
  	MatCardModule,
  	MatRadioModule,
  	MatSliderModule,
  	MatButtonModule,
  	MatButtonToggleModule,
  	MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ]
})

export class MatModule { }