import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FridgeComponent } from './fridge/fridge/fridge.component';
import { IngredientComponent } from './fridge/ingredient/ingredient.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fridge',
    component: FridgeComponent
  },
  {
    path: 'ingredient',
    component: IngredientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
