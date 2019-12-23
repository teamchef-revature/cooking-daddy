import { NgModule, Component, OnInit } from '@angular/core';
import { CookbookService } from '../cookbook.service';
import { Recipe } from '../../cook/recipe';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {
  recipes: Recipe[];

  constructor(private cookbookService: CookbookService) { }

  ngOnInit() {
    this.cookbookService.getCookbook().subscribe(
      resp => {
        this.recipes = resp;
        console.log(this.recipes);
      },
      error => {
        window.alert('Couldn\'t find the cookbook. It\'s lost in the shelf somewhere.');
      }
    );
  }
}
