import { Recipe } from './recipe';
import { Quality } from '../shared/ingredient/quality';
import { Ingredient } from '../shared/ingredient/ingredient';

export class Meal {
    id: number;
    recipe: Recipe;
    quality: Quality;
    ingredients: Ingredient[];
    inventory: number;
}
