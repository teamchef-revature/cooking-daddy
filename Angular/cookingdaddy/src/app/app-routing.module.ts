import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryControllerComponent } from './admin/category-controller/category-controller.component';
import { FlavorControllerComponent } from './admin/flavor-controller/flavor-controller.component';
import { QualityControllerComponent } from './admin/quality-controller/quality-controller.component';
import { IngredientControllerComponent } from './admin/ingredient-controller/ingredient-controller.component';
import { FridgeComponent } from './fridge/fridge/fridge.component';
import { CookComponent } from './cook/cook/cook.component';
import { IngredientComponent } from './fridge/ingredient/ingredient.component';
import { EquipmentComponent } from './fridge/equipment/equipment.component';
import { CategoryEditControllerComponent } from './admin/category-edit-controller/category-edit-controller.component';
import { MarketComponent } from './marketplace/market/market.component';
import { FlavorEditControllerComponent } from './admin/flavor-edit-controller/flavor-edit-controller.component';
import { QualityEditControllerComponent } from './admin/quality-edit-controller/quality-edit-controller.component';
import { IngredientEditControllerComponent } from './admin/ingredient-edit-controller/ingredient-edit-controller.component';
import { SeasonControllerComponent } from './admin/season-controller/season-controller.component';
import { SeasonEditControllerComponent } from './admin/season-edit-controller/season-edit-controller.component';
import { RecipeControllerComponent } from './admin/recipe-controller/recipe-controller.component';
import { RecipeEditControllerComponent } from './admin/recipe-edit-controller/recipe-edit-controller.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'market',
    component: MarketComponent
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
    path: 'equipments/:ninja',
    component: EquipmentComponent
  },
  {
    path: 'admin/category',
    component: CategoryControllerComponent
  },
  {
    path: 'admin/category/:id',
    component: CategoryEditControllerComponent
  },
  {
    path: 'admin/flavor',
    component: FlavorControllerComponent
  },
  {
    path: 'admin/flavor/:id',
    component: FlavorEditControllerComponent
  },
  {
    path: 'admin/quality',
    component: QualityControllerComponent
  },
  {
    path: 'admin/quality/:id',
    component: QualityEditControllerComponent
  },
  {
    path: 'admin/ingredient',
    component: IngredientControllerComponent
  },
  {
    path: 'admin/ingredient/:id',
    component: IngredientEditControllerComponent
  },
  {
    path: 'admin/season',
    component: SeasonControllerComponent
  },
  {
    path: 'admin/season/:id',
    component: SeasonEditControllerComponent
  },
  {
    path: 'admin/recipe',
    component: RecipeControllerComponent
  },
  {
    path: 'admin/recipe/:id',
    component: RecipeEditControllerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
