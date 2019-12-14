import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/shared/ingredient/category';

@Component({
  selector: 'app-category-item-controller',
  templateUrl: './category-item-controller.component.html',
  styleUrls: ['./category-item-controller.component.css']
})
export class CategoryItemControllerComponent implements OnInit {
  @Input() category: Category;
  constructor() { }

  ngOnInit() {
  }

}
