import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../shared/ingredient/category';
import { AdminService } from '../../shared/person/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-item-controller',
  templateUrl: './category-item-controller.component.html',
  styleUrls: ['./category-item-controller.component.css']
})
export class CategoryItemControllerComponent implements OnInit {
  @Input() category: Category;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if ( id ) {
      this.adminService.getCategory(id).subscribe(
        category => {
          this.category = category;
        });
    }
  }

  editCategory() {
    this.router.navigate(['/admin/category', this.category.id]);
  }

}
