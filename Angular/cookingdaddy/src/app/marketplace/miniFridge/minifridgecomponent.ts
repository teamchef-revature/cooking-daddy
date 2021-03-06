import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MarketServiceService } from '../market-service.service';
import { Person } from 'src/app/shared/person/person';
import { PersonIngredient } from 'src/app/shared/personIngredient/person-ingredient';
import { PersonEquipment } from 'src/app/shared/equipment/person-equipment';
import { PersonService } from 'src/app/shared/person/person.service';

@Component({
  selector: 'app-minifridge',
  templateUrl: './minifridge.component.html',
  styleUrls: ['./minifridge.component.css']
})
export class MinifridgeComponent implements OnInit {
  @Input() holder: Person;
  choice: number;
  @Input() personIngredients: PersonIngredient[];
  personEquipments: PersonEquipment[];
  @Output() add = new EventEmitter();
  @Input() refresh: {on: number};
  constructor(private basketHolder: MarketServiceService, private  active: PersonService) {
    if (!this.holder) {
      this.holder = active.getPerson();
      this.choice = 1;
    }
  }
  ngOnInit() {
    this.personEquipments = this.holder.equipments.filter(el => el.inventory > 0);
  }
  chooseIng() {
    this.choice = 1;
  }
  chooseEqu() {
    this.choice = 2;
  }
  onClick(ping: PersonIngredient) {
    if (ping.inventory === 0) {
    } else {
      ping.inventory--;
      this.active.getPerson().ingredients = this.personIngredients;
      const bping = new PersonIngredient();
      bping.ingredient = ping.ingredient;
      bping.inventory = 1;
      this.basketHolder.addItem(bping);
      this.add.emit();
    }
  }
}


