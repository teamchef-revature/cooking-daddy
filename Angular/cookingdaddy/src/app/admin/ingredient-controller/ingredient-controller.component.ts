import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { IngredientService } from '../../shared/ingredient/ingredient.service';

@Component({
  selector: 'app-ingredient-controller',
  templateUrl: './ingredient-controller.component.html',
  styleUrls: ['./ingredient-controller.component.css']
})
export class IngredientControllerComponent implements OnInit {
  @Input() ingredient: Ingredient;
  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if ( id ) {
      this.ingredientService.getIngredient(id).subscribe(
        ingredient => {
          this.ingredient = ingredient;
        });
    }
  }
  editIngredient() {
    this.router.navigate(['/admin/ingredients/edit', this.ingredient.id]);
  }
}
