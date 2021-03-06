import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/ingredient/category';
import { AdminService } from '../../shared/person/admin.service';

@Component({
  selector: 'app-category-controller',
  templateUrl: './category-controller.component.html',
  styleUrls: ['./category-controller.component.css']
})
export class CategoryControllerComponent implements OnInit {
  categories: Category[];
  category: Category;

  constructor( private adminService: AdminService ) { }

  ngOnInit() {
    this.category = new Category();
    this.category.parent = null;
    this.adminService.getCategories().subscribe(
      (c) => {
        this.categories = c;
        this.categories.sort ( (c1, c2) => c1.id - c2.id );
      });
  }

  submitted() {
    this.categories.push(this.category);
    this.category = new Category();
    this.category.parent = null;
  }
}
