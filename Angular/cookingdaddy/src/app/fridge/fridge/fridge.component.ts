import { Component, OnInit, Input } from '@angular/core';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';
import { PersonEquipment } from 'src/app/shared/equipment/person-equipment';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  personIngredients: PersonIngredient[];
  personEquipments: PersonEquipment[];
  choice: number;
  searchText: string;
  person: Person;
  @Input() public parentData;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.searchText = '';
    this.choice = 1;
    console.log(this.personService.getPerson());
    this.personIngredients = this.personService.getPerson().ingredients;
    console.log(this.personIngredients);
    this.personEquipments = this.personService.getPerson().equipments;
  }
  chooseIng() {
    this.choice = 1;
  }
  chooseEqu() {
    this.choice = 2;
  }

}
