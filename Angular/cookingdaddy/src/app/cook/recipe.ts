import { Flavor } from '../shared/ingredient/flavor';
import { RecipeComp } from './recipecomp';

export class Recipe {
    id: number;
    name: string;
    components: RecipeComp[];
    flavor: Flavor;
}
