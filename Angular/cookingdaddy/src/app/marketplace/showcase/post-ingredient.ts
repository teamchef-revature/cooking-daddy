import { PostIngredientID } from './post-ingredient-id';
import { Ingredient } from 'src/app/shared/ingredient/ingredient';

export class PostIngredient {
    id: PostIngredientID;
    ingredient: Ingredient;
    postid: number;
    quantity: number;
}
