import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './mat.module';
import { CardModule } from './card.module';

import { AppComponent } from '../component/app.component';
import { HomeComponent } from '../component/home.component';
import { CardComponent } from '../component/card.component';

/**
 * App module
 *
 * @author Esteban Martín <esteban.martin.busto@gmail.com>
 */
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    MatModule,
    CardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
