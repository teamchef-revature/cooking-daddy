import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient';

@Component({
  selector: 'app-ingredient-item-controller',
  templateUrl: './ingredient-item-controller.component.html',
  styleUrls: ['./ingredient-item-controller.component.css']
})
export class IngredientItemControllerComponent implements OnInit {
  @Input() ingredient: Ingredient;
  constructor() { }

  ngOnInit() {
  }

}
