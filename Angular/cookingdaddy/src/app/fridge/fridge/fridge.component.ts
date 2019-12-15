import { Component, OnInit, Input } from '@angular/core';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { PersonService } from 'src/app/shared/person/person.service';
import { Person } from 'src/app/shared/person/person';
import { PersonEquipment } from 'src/app/shared/equipment/person-equipment';
import { RandomitemService } from 'src/app/shared/randomitem.service';

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
  constructor(private personService: PersonService, private randSer: RandomitemService) { }

  ngOnInit() {
    this.searchText = '';
    this.choice = 1;
    this.personIngredients = this.personService.getPerson().ingredients;
    this.personEquipments = this.personService.getPerson().equipments;
  }
  chooseIng() {
    this.choice = 1;
  }
  chooseEqu() {
    this.choice = 2;
  }
  randIng() {
    return this.randSer.getRandIng();
  }

}
