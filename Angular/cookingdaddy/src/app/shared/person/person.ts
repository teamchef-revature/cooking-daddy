import { PersonIngredient } from '../personIngredient/person-ingredient';
import { Role } from '../person/role';
import { PersonEquipment } from '../equipment/person-equipment';

export class Person {
    id: string;
    username: string;
    password: string;
    first: string;
    last: string;
    ingredients: PersonIngredient[];
    role: Role;
    equipments: PersonEquipment[];
    chefRating: number;
    mealsServed: number;
}
