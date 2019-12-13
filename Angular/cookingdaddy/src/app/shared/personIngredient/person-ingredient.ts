import { Person } from '../person/person';
import { Ingredient } from '../ingredient/ingredient';

export class PersonIngredient {
    id: number;
    ingredient: Ingredient;
    inventory: number;
}
