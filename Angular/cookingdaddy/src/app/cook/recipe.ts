import { Flavor } from '../shared/ingredient/flavor';
import { Component } from './component';

export class Recipe {
    id: number;
    name: string;
    components: Component[];
    flavor: Flavor;
}
