import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/ingredient/category';
import { IngredientService } from '../../shared/ingredient/ingredient.service';

@Component({
  selector: 'app-category-controller',
  templateUrl: './category-controller.component.html',
  styleUrls: ['./category-controller.component.css']
})
export class CategoryControllerComponent implements OnInit {
  categories: Category[];
  category: Category;

  constructor( private ingredientService: IngredientService ) { }

  ngOnInit() {
    this.category = new Category();
    this.ingredientService.getCategories().subscribe(
      (c) => {
        this.categories = c;
        this.categories.sort ( (c1, c2) => c1.id - c2.id );
      }
    );
  }

  add(): void {
    this.ingredientService.addCategory( this.category ).subscribe( resp => {
      this.category = new Category();
      this.categories.push( resp );
    });
  }
}
