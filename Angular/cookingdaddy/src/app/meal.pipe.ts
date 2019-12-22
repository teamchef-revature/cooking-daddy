import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './cook/meal';

@Pipe({
  name: 'meal'
})
export class MealPipe implements PipeTransform {

  transform(meals: Meal[], searchText: string): Meal[] {
    if (!meals) {
      return [];
    }
    if (!searchText) {
      searchText = '';
    }
    searchText = searchText.toLowerCase();
    return meals.filter(meal => {
      const searchNumber: number = +searchText;
      const search = meal.recipe.name.toLowerCase().includes(searchText);
      return search;
    });
  }

}
