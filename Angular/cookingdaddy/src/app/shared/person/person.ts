import { PersonIngredient } from '../personIngredient/person-ingredient';
import { Role } from '../person/role';

export class Person {
    id: string;
    username: string;
    password: string;
    first: string;
    last: string;
    ingredients: PersonIngredient[];
    role: Role;
}
