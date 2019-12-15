import { Component, OnInit } from '@angular/core';
import { Category } from '../../shared/ingredient/category';
import { AdminService } from '../../shared/person/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-edit-controller',
  templateUrl: './category-edit-controller.component.html',
  styleUrls: ['./category-edit-controller.component.css']
})
export class CategoryEditControllerComponent implements OnInit {
  public category: Category;
  public categories: Category[];

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.category = new Category();
    this.category.parent = new Category();
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adminService.getCategory(id).subscribe(
        category => {
          this.category = category;
        });
    } else {
      this.category = new Category();
    }
    this.adminService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      });
  }

  addParent(parent: Category): void {
    if ( parent.name ) {
      this.category.parent = parent;
    } else {
      this.category.parent = null;
    }
    console.log(parent);
    console.log(this.category);
  }

  submit(): void {
    this.adminService.updateCategory(this.category).subscribe(
      category => {
        this.category = category;
        this.router.navigate(['/admin/category']);
      });
  }

  cancel(): void {
    this.router.navigate(['/admin/category']);
  }
}
