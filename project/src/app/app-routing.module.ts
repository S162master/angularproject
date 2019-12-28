import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceComponent } from './price/price.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ButtonComponent } from './button/button.component';


const routes: Routes = [
  {path: 'price', component: PriceComponent},
  {path: 'trainers', component: TrainersComponent},
  {path: 'button', component: ButtonComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
