import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { AdminService } from '../../shared/person/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ingredient-item-controller',
  templateUrl: './ingredient-item-controller.component.html',
  styleUrls: ['./ingredient-item-controller.component.css']
})
export class IngredientItemControllerComponent implements OnInit {
  @Input() ingredient: Ingredient;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adminService.getIngredient(id).subscribe(
        ingredient => {
          this.ingredient = ingredient;
        });
    }
  }

  editIngredient() {
    this.router.navigate(['/admin/ingredient', this.ingredient.id]);
  }
}
