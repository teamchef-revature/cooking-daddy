import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FridgeComponent } from './fridge/fridge/fridge.component';
import { IngredientComponent } from './fridge/ingredient/ingredient.component';
import { IngredientControllerComponent } from './admin/ingredient-controller/ingredient-controller.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'admin/ingredients',
    component: IngredientControllerComponent
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
