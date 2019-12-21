import { Status } from './status';
import { Ingredient } from 'src/app/shared/ingredient/ingredient';

export class Offer {
    id: number;
    status: Status;
    description: string;
    postId: number;
    ingredients: Ingredient[];
    offerMakerId: string;
}
