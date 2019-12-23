import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Flavor } from '../ingredient/flavor';
import { Category } from '../ingredient/category';
import { Quality } from '../ingredient/quality';
import { Ingredient } from '../ingredient/ingredient';
import { Recipe } from '../../cook/recipe';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private appUrl = this.urlService.getUrl() + '/admin';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private urlService: UrlService, private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get(this.appUrl + '/category', { withCredentials: true }).pipe(map(resp => resp as Category[]));
  }
  public getCategory(id: number): Observable<Category> {
    const url: string = this.appUrl + '/category/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Category));
  }
  public updateCategory(category: Category) {
    const body = JSON.stringify(category);
    if (category.id) {
      return this.http.put(this.appUrl + '/category/' + category.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Category));
    }
  }
  public addCategory(category: Category) {
    const body = JSON.stringify(category);
    return this.http.post(this.appUrl + '/category', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Category));
  }

  public getFlavors(): Observable<Flavor[]> {
    return this.http.get(this.appUrl + '/flavor', {
      withCredentials: true
    }).pipe(map(resp => resp as Flavor[]));
  }
  public getFlavor(id: number): Observable<Flavor> {
    const url: string = this.appUrl + '/flavor/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Flavor));
  }
  public updateFlavor(flavor: Flavor) {
    const body = JSON.stringify(flavor);
    if (flavor.id) {
      return this.http.put(this.appUrl + '/flavor/' + flavor.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Flavor));
    }
  }
  public addFlavor(flavor: Flavor) {
    const body = JSON.stringify(flavor);
    return this.http.post(this.appUrl + '/flavor', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Flavor));
  }

  public getQualities(): Observable<Quality[]> {
    return this.http.get(this.appUrl + '/quality', {
      withCredentials: true
    }).pipe(map(resp => resp as Quality[]));
  }
  public getQuality(id: number): Observable<Quality> {
    const url: string = this.appUrl + '/quality/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Quality));
  }
  public updateQuality(quality: Quality) {
    const body = JSON.stringify(quality);
    if (quality.id) {
      return this.http.put(this.appUrl + '/quality/' + quality.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Quality));
    }
  }
  public addQuality(quality: Quality) {
    const body = JSON.stringify(quality);
    return this.http.post(this.appUrl + '/quality', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Quality));
  }

  public getIngredients(): Observable<Ingredient[]> {
    return this.http.get(this.appUrl + '/ingredient', {
      withCredentials: true
    }).pipe(map(resp => resp as Ingredient[]));
  }
  public getIngredient(id: number): Observable<Ingredient> {
    const url: string = this.appUrl + '/ingredient/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Ingredient));
  }
  public updateIngredient(ingredient: Ingredient) {
    const body = JSON.stringify(ingredient);
    if (ingredient.id) {
      return this.http.put(this.appUrl + '/ingredient/' + ingredient.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Ingredient));
    }
  }
  public addIngredient(ingredient: Ingredient) {
    const body = JSON.stringify(ingredient);
    return this.http.post(this.appUrl + '/ingredient', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Ingredient));
  }

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get(this.appUrl + '/recipe', {
      withCredentials: true
    }).pipe(map(resp => resp as Recipe[]));
  }
  public getRecipe(id: number): Observable<Recipe> {
    const url: string = this.appUrl + '/recipe/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Recipe));
  }
  public updateRecipe(recipe: Recipe) {
    const body = JSON.stringify(recipe);
    if (recipe.id) {
      return this.http.put(this.appUrl + '/recipe/' + recipe.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Recipe));
    }
  }
  public addRecipe(recipe: Recipe) {
    const body = JSON.stringify(recipe);
    return this.http.post(this.appUrl + '/recipe', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Recipe));
  }
  public removeRecipeComponent(recipe: Recipe) {
    if (recipe.id != null) {
      return this.http.delete(this.appUrl + '/recipe/' + recipe.id, {
        headers: this.headers, withCredentials: true
      });
    }
  }
}
