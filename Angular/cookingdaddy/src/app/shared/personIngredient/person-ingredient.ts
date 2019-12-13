import { Person } from '../person/person';
import { Ingredient } from '../ingredient/ingredient';

export class PersonIngredient {
    id: number;
    person: Person;
    ingredient: Ingredient;
    inventory: number;
}
