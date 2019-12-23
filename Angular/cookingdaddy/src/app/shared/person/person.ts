import { PersonIngredient } from '../personIngredient/person-ingredient';
import { Role } from '../person/role';
import { PersonEquipment } from '../equipment/person-equipment';
import { Meal } from 'src/app/cook/meal';
import { Offer } from 'src/app/marketplace/showcase/offer';

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
    meals: Meal[];
    offers: Offer[];
}
