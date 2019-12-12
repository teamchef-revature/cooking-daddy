import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IngredientComponent } from './fridge/ingredient/ingredient.component';
import { IngredientControllerComponent } from './admin/ingredient-controller/ingredient-controller.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ingredient',
    component: IngredientComponent
  },
  {
    path: 'admin/ingredients',
    component: IngredientControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
