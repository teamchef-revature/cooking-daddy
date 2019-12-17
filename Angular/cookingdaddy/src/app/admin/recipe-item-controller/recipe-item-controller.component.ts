import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../cook/recipe';
import { AdminService } from '../../shared/person/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item-controller',
  templateUrl: './recipe-item-controller.component.html',
  styleUrls: ['./recipe-item-controller.component.css']
})
export class RecipeItemControllerComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.parmMap.get('id');
    if (id) {
      this.adminService.getRecipe(id).subscribe(
        recipe => {
          this.recipe = recipe;
        });
    }
  }

  editRecipe() {
    this.router.navigate(['/admin/recipe', this.recipe.id]);
  }
}
