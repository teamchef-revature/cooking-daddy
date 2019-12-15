import { Injectable } from '@angular/core';
import { IngredientService } from './ingredient/ingredient.service';
import { EquipmentService } from './equipment/equipment.service';
import { Ingredient } from './ingredient/ingredient';
import { Equipment } from './equipment/equipment';
import { PersonService } from './person/person.service';
import { Person } from './person/person';
import { Quality } from './ingredient/quality';
import { AdminService } from './person/admin.service';

@Injectable({
  providedIn: 'root'
})
export class RandomitemService {
  private alling: Ingredient[];
  private allequ: Equipment[];
  private user: Person;
  private maxQual: number;

  constructor(
    ingser: IngredientService,
    equser: EquipmentService,
    admser: AdminService,
    activeser: PersonService) {
      ingser.getIngredients().subscribe(resp => this.alling = resp);
      equser.getEquipments().subscribe(resp => this.allequ = resp);
      admser.getQualities().subscribe(resp2 => this.maxQual = resp2.length);
      this.user = activeser.getPerson();
    }
  getRandIng(): Ingredient {
    const randLevel: number = 1 + (this.maxQual * Math.random());
    const randIngChoice: Ingredient[] = this.alling.filter(element => element.quality.id <= randLevel);
    const randID: number = Math.floor(randIngChoice.length * Math.random());
    return randIngChoice[randID];
  }
  getRandEqui(): Equipment {
    const randLevel: number = 1 + (this.maxQual * Math.random());
    const randEquChoice: Equipment[] = this.allequ.filter(element => element.quality.id <= randLevel);
    const randID: number = Math.floor(randEquChoice.length * Math.random());
    return randEquChoice[randID];
  }
}
