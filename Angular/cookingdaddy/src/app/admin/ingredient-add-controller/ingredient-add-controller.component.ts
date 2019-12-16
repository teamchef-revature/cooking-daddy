import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { Category } from '../../shared/ingredient/category';
import { AdminService } from '../../shared/person/admin.service';
import { Flavor } from '../../shared/ingredient/flavor';
import { Quality } from '../../shared/ingredient/quality';

@Component({
  selector: 'app-ingredient-add-controller',
  templateUrl: './ingredient-add-controller.component.html',
  styleUrls: ['./ingredient-add-controller.component.css']
})
export class IngredientAddControllerComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  @Output() created = new EventEmitter<Boolean>();
  @Input() ingredient: Ingredient;
  categories: Category[];
  flavors: Flavor[];
  qualities: Quality[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getCategories().subscribe(
      (c) => {
        this.categories = c;
        this.categories.sort( (c1, c2) => c1.id - c2.id );
      });
    this.adminService.getFlavors().subscribe(
      (f) => {
        this.flavors = f;
        this.flavors.sort( (f1, f2) => f1.id - f2.id );
      });
    this.adminService.getQualities().subscribe(
      (q) => {
        this.qualities = q;
        this.qualities.sort( (q1, q2) => q1.id - q1.id );
      });
  }

  addCategory(category: Category): void {
    if (category.name ) {
      this.ingredient.category = category;
    } else {
      this.ingredient.category = null;
    }
  }

  addFlavor(flavor: Flavor): void {
    if (flavor.name) {
      this.ingredient.flavor = flavor;
    } else {
      this.ingredient.flavor = null;
    }
  }

  addQuality(quality: Quality): void {
    if (quality.name) {
      this.ingredient.quality = quality;
    } else {
      this.ingredient.quality = null;
    }
  }

  addIngredient() {
    this.adminService.addIngredient(this.ingredient).subscribe(
      ingredient => {
        this.ingredient = ingredient;
        this.created.emit(true);
      });
  }
}
