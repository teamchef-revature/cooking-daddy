import { OfferIngredientId } from './offer-ingredient-id';
import { Ingredient } from 'src/app/shared/ingredient/ingredient';

export class OfferIngredient {
    id: OfferIngredientId;
    ingredient: Ingredient;
    offerId: number;
    quantity: number;
}
