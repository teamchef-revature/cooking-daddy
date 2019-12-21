import { Component, OnInit, Input } from '@angular/core';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';
import { PersonEquipment } from 'src/app/shared/equipment/person-equipment';
import { RandomitemService } from 'src/app/shared/randomitem.service';
import { Ingredient } from 'src/app/shared/ingredient/ingredient';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  private personIngredients: PersonIngredient[];
  private personEquipments: PersonEquipment[];
  private choice: number;
  private searchText: string;
  private person: Person;
  private randIngred: Ingredient;
  constructor(private personService: PersonService, private randSer: RandomitemService) { }

  ngOnInit() {
    this.searchText = '';
    this.choice = 1;
    this.personIngredients = this.personService.getPerson().ingredients.filter(el => el.inventory > 0);
    this.personEquipments = this.personService.getPerson().equipments.filter(el => el.inventory > 0);
    this.person = this.personService.getPerson();
  }
  chooseIng() {
    this.choice = 1;
  }
  chooseEqu() {
    this.choice = 2;
  }
  chooseMeal() {
    this.choice = 3;
  }
  randIng() {
    this.randIngred = this.randSer.getRandIng();
    return this.randIngred;
  }
  takeRandIng() {
    this.randSer.addIngToPer(this.randIngred, this.person, 1, true);
  }

}
