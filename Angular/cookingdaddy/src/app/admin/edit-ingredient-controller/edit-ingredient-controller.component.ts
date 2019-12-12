import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { Flavor } from '../../shared/ingredient/flavor';
import { Quality } from '../../shared/ingredient/quality';
import { Category } from '../../shared/ingredient/category';
import { IngredientService } from '../../shared/ingredient/ingredient.service';

@Component({
  selector: 'app-edit-ingredient-controller',
  templateUrl: './edit-ingredient-controller.component.html',
  styleUrls: ['./edit-ingredient-controller.component.css']
})
export class EditIngredientControllerComponent implements OnInit {
  public ingredient: Ingredient;
  public flavorList: Flavor[];
  public qualityList: Quality[];
  public categoryList: Category[];

  constructor(
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if ( id ) {
      this.ingredientService.getIngredient(id).subscribe(
        ingredient => {
          this.ingredient = ingredient;
        });
    } else {
      this.ingredient = new Ingredient();
      this.ingredientService.getFlavors().subscribe(
        flavors => {
          this.flavorList = flavors;
        });
      this.ingredientService.getQualities().subscribe(
        qualities => {
          this.qualityList = qualities;
        });
      this.ingredientService.getCategories().subscribe(
        categories => {
          this.categoryList = categories;
        });
    }
  }

  submit(): void {
    this.ingredientService.updateIngredient(this.ingredient).subscribe(
      ingredient => {
        this.ingredient = ingredient;
        this.router.navigate(['/admin/ingredients']);
      });
  }
}
