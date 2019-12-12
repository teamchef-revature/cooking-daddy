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
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'ingredients',
    component: FridgeComponent
  },
  {
    path: 'ingredients/:bob',
    component: IngredientComponent
  },
  {
    path: 'ingredients',
    component: FridgeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
