import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../../shared/ingredient/ingredient';
import { PersonService } from 'src/app/shared/person/person.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router, ActivatedRoute } from '@angular/router';
import { IngredientService } from '../../shared/ingredient/ingredient.service';
import { Person } from 'src/app/shared/person/person';
import { Season } from 'src/app/shared/ingredient/season';
import { SeasonService } from 'src/app/shared/ingredient/season.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {
  @Input() ingredient: Ingredient;
  private owner: Person;
  private seasonsopen: boolean;

  constructor(
    private ingredientService: IngredientService,
    private personService: PersonService,
    private router: Router,
    private route: ActivatedRoute,
    private seaser: SeasonService
  ) {this.owner = personService.getPerson(); }

  ngOnInit() {
    this.owner = this.personService.getPerson();
    this.seasonsopen = false;
    const id = +this.route.snapshot.paramMap.get('bob');
    if (id) {
      this.ingredientService.getIngredient(id).subscribe(
        ingredient => {
          this.ingredient = ingredient;
          console.log('ingredient');
        }
      );
    }
  }
  toggleAvail() {
    this.seasonsopen = (this.seasonsopen) ? false : true;
  }
  inSOrR(s: Season): number {
    if (this.seaser.inSeason(s)) {
      return 1;
    } else {
      if (s.recurring) {
        return 2;
      } else {
        return 3;
      }
    }
  }
}
