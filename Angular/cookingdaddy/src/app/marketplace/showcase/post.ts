import { Status } from './status';
import { PostIngredient } from './post-ingredient';
import { Offer } from './offer';

export class Post {
    id: number;
    description: string;
    status: Status;
    personId: string;
    ingredients: PostIngredient[];
    offers: Offer[];
}
