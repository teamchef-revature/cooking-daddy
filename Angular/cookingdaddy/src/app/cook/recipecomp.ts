import { Ingredient } from '../shared/ingredient/ingredient';
import { Category } from '../shared/ingredient/category';
import { Flavor } from '../shared/ingredient/flavor';

export class RecipeComp {
    id: number;
    ingredient: Ingredient;
    category: Category;
    flavor: Flavor;
}
