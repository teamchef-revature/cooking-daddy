import { Status } from './status';
import { OfferIngredient } from './offer-ingredient';

export class Offer {
    id: number;
    status: Status;
    description: string;
    postId: number;
    ingredients: OfferIngredient[];
    offerMakerId: string;
}
