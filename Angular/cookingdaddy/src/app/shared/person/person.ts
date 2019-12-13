import { PersonIngredient } from '../personIngredient/person-ingredient';

export class Person {
    id: string;
    username: string;
    password: string;
    first: string;
    last: string;
    ingredients: PersonIngredient[];
    roleId: number;
}
