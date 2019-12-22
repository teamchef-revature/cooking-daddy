import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/login/login.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { FridgeComponent } from './fridge/fridge/fridge.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './core/register/register.component';
import { UrlService } from './shared/url.service';
import { PersonService } from './shared/person/person.service';
import { AdminService } from './shared/person/admin.service';
import { IngredientControllerComponent } from './admin/ingredient-controller/ingredient-controller.component';
import { CategoryControllerComponent } from './admin/category-controller/category-controller.component';
import { FlavorControllerComponent } from './admin/flavor-controller/flavor-controller.component';
import { QualityControllerComponent } from './admin/quality-controller/quality-controller.component';
import { IngredientComponent } from './fridge/ingredient/ingredient.component';
import { IngredientPipe } from './ingredient.pipe';
import { CookComponent } from './cook/cook/cook.component';
import { EquipmentPipe } from './equipment.pipe';
import { EquipmentComponent } from './fridge/equipment/equipment.component';
import { CategoryItemControllerComponent } from './admin/category-item-controller/category-item-controller.component';
import { CategoryEditControllerComponent } from './admin/category-edit-controller/category-edit-controller.component';
import { FlavorItemControllerComponent } from './admin/flavor-item-controller/flavor-item-controller.component';
import { QualityItemControllerComponent } from './admin/quality-item-controller/quality-item-controller.component';
import { IngredientItemControllerComponent } from './admin/ingredient-item-controller/ingredient-item-controller.component';
import { MarketComponent } from './marketplace/market/market.component';
import { BasketComponent } from './marketplace/basket/basket.component';
import { MinifridgeComponent } from './marketplace/miniFridge/minifridgecomponent';
import { CategoryAddControllerComponent } from './admin/category-add-controller/category-add-controller.component';
import { FlavorEditControllerComponent } from './admin/flavor-edit-controller/flavor-edit-controller.component';
import { FlavorAddControllerComponent } from './admin/flavor-add-controller/flavor-add-controller.component';
import { MarketServiceService } from './marketplace/market-service.service';
import { QualityAddControllerComponent } from './admin/quality-add-controller/quality-add-controller.component';
import { QualityEditControllerComponent } from './admin/quality-edit-controller/quality-edit-controller.component';
import { IngredientEditControllerComponent } from './admin/ingredient-edit-controller/ingredient-edit-controller.component';
import { IngredientAddControllerComponent } from './admin/ingredient-add-controller/ingredient-add-controller.component';
import { CookbookComponent } from './cook/cookbook/cookbook/cookbook.component';
import { StorefridgeComponent } from './marketplace/storefridge/storefridge.component';
import { StorebasketComponent } from './marketplace/storebasket/storebasket.component';
import { SeasonControllerComponent } from './admin/season-controller/season-controller.component';
import { SeasonEditControllerComponent } from './admin/season-edit-controller/season-edit-controller.component';
import { SeasonAddControllerComponent } from './admin/season-add-controller/season-add-controller.component';
import { SeasonItemControllerComponent } from './admin/season-item-controller/season-item-controller.component';
import { DatePipe } from '@angular/common';
import { RecipeControllerComponent } from './admin/recipe-controller/recipe-controller.component';
import { RecipeAddControllerComponent } from './admin/recipe-add-controller/recipe-add-controller.component';
import { RecipeEditControllerComponent } from './admin/recipe-edit-controller/recipe-edit-controller.component';
import { RecipeItemControllerComponent } from './admin/recipe-item-controller/recipe-item-controller.component';
import { ShowcaseComponent } from './marketplace/showcase/showcase/showcase.component';
import { ClassifiedsComponent } from './marketplace/showcase/classifieds/classifieds.component';
import { RestaurantComponent } from './cook/restaurant/restaurant.component';
import { MealComponent } from './fridge/meal/meal.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MealPipe } from './meal.pipe';
import { OfferComponent } from './marketplace/showcase/offer/offer.component';
import { PostrowComponent } from './marketplace/showcase/postrow/postrow.component';
import { OfferrowComponent } from './marketplace/showcase/offerrow/offerrow.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    FridgeComponent,
    HomeComponent,
    IngredientControllerComponent,
    CategoryControllerComponent,
    FlavorControllerComponent,
    QualityControllerComponent,
    IngredientComponent,
    IngredientPipe,
    CookComponent,
    EquipmentPipe,
    EquipmentComponent,
    CategoryItemControllerComponent,
    CategoryEditControllerComponent,
    FlavorItemControllerComponent,
    QualityItemControllerComponent,
    IngredientItemControllerComponent,
    MarketComponent,
    BasketComponent,
    MinifridgeComponent,
    CategoryAddControllerComponent,
    FlavorEditControllerComponent,
    FlavorAddControllerComponent,
    QualityAddControllerComponent,
    QualityEditControllerComponent,
    IngredientEditControllerComponent,
    IngredientAddControllerComponent,
    CookbookComponent,
    StorefridgeComponent,
    StorebasketComponent,
    SeasonControllerComponent,
    SeasonEditControllerComponent,
    SeasonAddControllerComponent,
    SeasonItemControllerComponent,
    RecipeControllerComponent,
    RecipeAddControllerComponent,
    RecipeEditControllerComponent,
    RecipeItemControllerComponent,
    ShowcaseComponent,
    ClassifiedsComponent,
    RestaurantComponent,
    MealComponent,
    LeaderboardComponent,
    MealPipe,
    OfferComponent,
    PostrowComponent,
    OfferrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UrlService,
    PersonService,
    AdminService,
    MarketServiceService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
