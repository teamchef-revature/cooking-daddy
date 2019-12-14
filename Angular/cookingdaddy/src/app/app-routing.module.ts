import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FridgeComponent } from './fridge/fridge/fridge.component';
import { CookComponent } from './cook/cook/cook.component';
import { IngredientComponent } from './fridge/ingredient/ingredient.component';
import { IngredientControllerComponent } from './admin/ingredient-controller/ingredient-controller.component';
import { EquipmentComponent } from './fridge/equipment/equipment.component';

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
    path: 'equipments/:ninja',
    component: EquipmentComponent
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
