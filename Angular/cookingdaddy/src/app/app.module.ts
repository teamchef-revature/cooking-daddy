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
// import { RegisterComponent } from './core/register/register.component';
import { UrlService } from './shared/url.service';
import { PersonService } from './shared/person/person.service';
import { IngredientComponent } from './fridge/ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    FridgeComponent,
    HomeComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    UrlService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
