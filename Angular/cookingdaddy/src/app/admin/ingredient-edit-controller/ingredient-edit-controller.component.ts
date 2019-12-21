import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { Category } from '../../shared/ingredient/category';
import { Quality } from '../../shared/ingredient/quality';
import { Flavor } from '../../shared/ingredient/flavor';
import { AdminService } from '../../shared/person/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Season } from '../../shared/ingredient/season';
import { SeasonService } from '../../shared/ingredient/season.service';

@Component({
  selector: 'app-ingredient-edit-controller',
  templateUrl: './ingredient-edit-controller.component.html',
  styleUrls: ['./ingredient-edit-controller.component.css']
})
export class IngredientEditControllerComponent implements OnInit {
  public ingredient: Ingredient;
  public categories: Category[];
  public qualities: Quality[];
  public flavors: Flavor[];
  public allseasons: Season[];

  constructor(
    private adminService: AdminService,
    private seasonService: SeasonService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ingredient = new Ingredient();
    this.ingredient.category = new Category();
    this.ingredient.quality = new Quality();
    this.ingredient.flavor = new Flavor();
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adminService.getIngredient(id).subscribe(
        ingredient => {
          this.ingredient = ingredient;
        });
    } else {
      this.ingredient = new Ingredient();
    }
    this.adminService.getCategories().subscribe(
      categories => {
        this.categories = categories;
      });
    this.adminService.getQualities().subscribe(
      qualities => {
        this.qualities = qualities;
      });
    this.adminService.getFlavors().subscribe(
      flavors => {
        this.flavors = flavors;
      });
    this.seasonService.getSeasons().subscribe(
      s => {
        this.allseasons = this.seasonService.getDSeasons(s);
        if (this.ingredient.seasons) {
          this.ingredient.seasons.forEach(
            el => this.allseasons.splice(this.allseasons.indexOf(el), 1)
          );
        } else {
          this.ingredient.seasons = [];
        }
      }
    );
  }

  addCategory(category: Category): void {
    if (category.name) {
      this.ingredient.category = category;
    }
  }

  addQuality(quality: Quality): void {
    if (quality.name) {
      this.ingredient.quality = quality;
    }
  }

  addFlavor(flavor: Flavor): void {
    if (flavor.name) {
      this.ingredient.flavor = flavor;
    }
  }

  addSeason(s: Season) {
    // @ts-ignore
    if (s === 'nil') {
      return;
    }
    this.ingredient.seasons.push(s);
    this.allseasons.splice(this.allseasons.indexOf(s), 1);
  }

  removeSeason(s: Season) {
    this.allseasons.push(s);
    this.ingredient.seasons.splice(this.allseasons.indexOf(s), 1);
  }

  submit(): void {
    this.adminService.updateIngredient(this.ingredient).subscribe(
      ingredient => {
        this.ingredient = ingredient;
        this.router.navigate(['/admin/ingredient']);
      });
  }

  cancel(): void {
    this.router.navigate(['/admin/ingredient']);
  }
}
