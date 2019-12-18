import { Flavor } from '../shared/ingredient/flavor';
import { Thecomp } from './thecomp';

export class Recipe {
    id: number;
    name: string;
    components: Thecomp[];
    flavor: Flavor;
    any: boolean;
}
