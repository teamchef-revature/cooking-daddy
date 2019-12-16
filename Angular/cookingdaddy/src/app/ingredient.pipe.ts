import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from './shared/ingredient/ingredient';
import { PersonIngredient } from './shared/personIngredient/person-ingredient';

@Pipe({
  name: 'ingredient'
})
export class IngredientPipe implements PipeTransform {

  transform(ingredients: PersonIngredient[], searchText: string): PersonIngredient[] {
    if (!ingredients) {
      return [];
    }
    if (!searchText) {
      searchText = '';
    }
    searchText = searchText.toLowerCase();
    return ingredients.filter(ingredient => {
      const searchNumber: number = +searchText;
      const search = ingredient.ingredient.name.toLowerCase().includes(searchText)
         || ingredient.ingredient.category.name.toLowerCase().includes(searchText);
      //   || ingredient.quality.includes(searchText)
      //   || ingredient.flavor.includes(searchText)
      //   || ingredient.inventory === searchNumber
      // if (ingredient.isbn13) {
      //   search = search || ingredient.isbn13.includes(searchText);
      // }
      // for (const a of book.authors) {
      //   console.log(a);
      //   search = search || a.first.toLowerCase().includes(searchText)
      //     || a.last.toLowerCase().includes(searchText);
      //   if (a.about) {
      //     search = search || a.about.toLowerCase().includes(searchText);
      //   }
      // }
      // for (const g of book.genres) {
      //   search = search || g.genre.toLowerCase().includes(searchText);
      // }
      return search;
    });
  }

}
