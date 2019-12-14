import { PersonIngredient } from '../personIngredient/person-ingredient';
import { PersonEquipment } from '../equipment/person-equipment';

export class Person {
    id: string;
    username: string;
    password: string;
    first: string;
    last: string;
    ingredients: PersonIngredient[];
    equipments: PersonEquipment[];
    roleId: number;
}
