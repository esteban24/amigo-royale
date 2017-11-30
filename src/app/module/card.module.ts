import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LazyLoadImageModule } from 'ng2-lazyload-image';

import { MatModule } from './mat.module';

/**
 * Card module
 *
 * @author Esteban Martín <esteban.martin.busto@gmail.com>
 */
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MatModule,
    BrowserAnimationsModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: []
})

export class CardModule { }
