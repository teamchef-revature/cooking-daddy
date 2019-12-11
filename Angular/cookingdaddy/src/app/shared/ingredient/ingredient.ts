import { Category } from './category';
import { Quality } from './quality';
import { Flavor } from './flavor';

export class Ingredient {
    id: number;
    name: string;
    inventory: number;
    category: Category;
    quality: Quality;
    flavor: Flavor;
}
