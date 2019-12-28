import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceComponent } from './price/price.component';
import { TrainersComponent } from './trainers/trainers.component';
import {FormsModule} from '@angular/forms';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceComponent,
    TrainersComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
