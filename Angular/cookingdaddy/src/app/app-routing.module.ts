import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FridgeComponent } from './fridge/fridge/fridge.component';
import { CookComponent } from './cook/cook/cook.component';
import { IngredientComponent } from './fridge/ingredient/ingredient.component';
import { CategoryControllerComponent } from './admin/category-controller/category-controller.component';
import { FlavorControllerComponent } from './admin/flavor-controller/flavor-controller.component';
import { QualityControllerComponent } from './admin/quality-controller/quality-controller.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'fridge',
    component: FridgeComponent
  },
  {
    path: 'cook',
    component: CookComponent
  },
  {
    path: 'ingredients/:bob',
    component: IngredientComponent
  },
  {
    path: 'admin/category',
    component: CategoryControllerComponent
  },
  {
    path: 'admin/flavor',
    component: FlavorControllerComponent
  },
  {
    path: 'admin/quality',
    component: QualityControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
