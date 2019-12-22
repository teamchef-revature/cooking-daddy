import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Category } from '../../shared/ingredient/category';
import { AdminService } from '../../shared/person/admin.service';

@Component({
  selector: 'app-category-add-controller',
  templateUrl: './category-add-controller.component.html',
  styleUrls: ['./category-add-controller.component.css']
})
export class CategoryAddControllerComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  @Output() created = new EventEmitter<Boolean>();
  @Input() category: Category;
  categories: Category[];
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getCategories().subscribe(
      (c) => {
        this.categories = c;
        this.categories.sort( (c1, c2) => c1.id - c2.id );
      });
  }

  addParent(parent: Category): void {
    if ( parent.name ) {
      this.category.parent = parent;
    } else {
      this.category.parent = null;
    }
  }

  addCategory() {
    this.adminService.addCategory(this.category).subscribe(
      category => {
        this.category = category;
        this.created.emit(true);
      });
  }
}
