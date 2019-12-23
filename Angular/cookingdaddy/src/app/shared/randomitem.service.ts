import { Injectable } from '@angular/core';
import { IngredientService } from './ingredient/ingredient.service';
import { EquipmentService } from './equipment/equipment.service';
import { Ingredient } from './ingredient/ingredient';
import { Equipment } from './equipment/equipment';
import { PersonService } from './person/person.service';
import { Person } from './person/person';
import { AdminService } from './person/admin.service';
import { PersonIngredient } from './personIngredient/person-ingredient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from './url.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PersonEquipment } from './equipment/person-equipment';
import { SeasonService } from './ingredient/season.service';

@Injectable({
  providedIn: 'root'
})
export class RandomitemService {
  private alling: Ingredient[];
  private allequ: Equipment[];
  private user: Person;
  private maxQual: number;
  private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  private urlstart: string = this.url.getUrl() + '/person/';
  private urlpi: string = this.url.getUrl() + '/personIngredient';
  private urlpe: string = this.url.getUrl() + '/personEquipment';
  private today: Date = new Date();

  constructor(
    private ingser: IngredientService,
    private equser: EquipmentService,
    private admser: AdminService,
    private activeser: PersonService,
    private seaser: SeasonService,
    private http: HttpClient,
    private url: UrlService) {
    ingser.getIngredients().subscribe(resp => this.alling = resp);
    equser.getEquipments().subscribe(resp => this.allequ = resp);
    admser.getQualities().subscribe(resp => this.maxQual = resp.length);
    this.user = activeser.getPerson();
  }

  // this.personService.login(this.username, this.password).subscribe(
  //   resp => {
  //     this.activePerson = resp;
  //   },
  getRandIng(): Ingredient {
    const randLevel: number = 3 + ((this.maxQual - 2) * Math.random());
    this.ingser.getIngredients().subscribe(resp => this.alling = resp);
    const randIngChoice: Ingredient[] = this.alling.filter(element =>
      (element.quality.id <= randLevel) && (this.seaser.anyInSeason(element.seasons)));
    const randID: number = Math.floor(randIngChoice.length * Math.random());
    return randIngChoice[randID];
}
getRandEqui(): Equipment {
  const randLevel: number = 2 + ((this.maxQual - 1) * Math.random());
  const randEquChoice: Equipment[] = this.allequ.filter(element => element.quality.id <= randLevel);
  const randID: number = Math.floor(randEquChoice.length * Math.random());
  return randEquChoice[randID];
}
addIngToPer(ing: Ingredient, per: Person, num: number, toDB: boolean) {
  const prev: number = per.ingredients.findIndex(perig => perig.ingredient.id === ing.id);
  if (prev + 1) {
    const pering = per.ingredients[prev];
    const aftertot = pering.inventory + num;
    if (aftertot >= 0) {
      pering.inventory += num;
      if (toDB) {
        this.updatePersonIngredient(pering).subscribe(resp => console.log(resp));
      }
    } else {
      return null;
    }
  } else {
    if (num < 0) {
      return null;
    }
    const pering = new PersonIngredient();
    pering.ingredient = ing;
    pering.inventory = num;
    pering.person_id = per.id;
    per.ingredients.push(pering);
    if (toDB) {
      this.addPersonIngredient(pering).subscribe(resp => console.log(resp));
    }
  }
}
addEquToPer(equ: Equipment, per: Person, num: number, toDB: boolean) {
  const prev: number = per.equipments.findIndex(pereq => pereq.equipment.id === equ.id);
  if (prev + 1) {
    const perequ = per.equipments[prev];
    const aftertot = perequ.inventory + num;
    if (aftertot >= 0) {
      perequ.inventory += num;
      if (toDB) {
        this.updatePersonEquipment(perequ).subscribe(resp => console.log(resp));
      }
    } else {
      return null;
    }
  } else {
    if (num < 0) {
      return null;
    }
    const perequ = new PersonEquipment();
    perequ.equipment = equ;
    perequ.inventory = num;
    perequ.personId = per.id;
    per.equipments.push(perequ);
    if (toDB) {
      this.addPersonEquipment(perequ).subscribe(resp => console.log(resp));
    }
  }
}
updatePerson(per: Person) {
  const body = JSON.stringify(per);
  this.http.put(this.urlstart + per.id, body, {
    headers: this.headers, withCredentials: true
  }).pipe(map(resp => resp as Person)
  ).subscribe(resp => {
    console.log(resp);
    if (resp) {
      per.ingredients = resp.ingredients;
      per.equipments = resp.equipments;
      per.first = resp.first;
      per.id = resp.id;
      per.last = resp.last;
      per.role = resp.role;
      per.username = resp.username;
      per.password = resp.password;
    }
  });
  return per;
}
  public addPersonIngredient(pi: PersonIngredient): Observable < string > {
  const body = JSON.stringify(pi);
  return this.http.post(this.urlpi, body, { headers: this.headers, withCredentials: true }).pipe(
    map(resp => resp as string)
  );
}
  public updatePersonIngredient(pin: PersonIngredient): Observable < PersonIngredient > {
  if (pin.id) {
  const body = JSON.stringify(pin);
  return this.http.put(this.urlpi + '/' + pin.id, body, { headers: this.headers, withCredentials: true }).pipe(
    map(resp => resp as PersonIngredient)
  );
} else {
  return null;
}
  }
  public addPersonEquipment(pe: PersonEquipment): Observable < string > {
  const body = JSON.stringify(pe);
  return this.http.post(this.urlpe, body, { headers: this.headers, withCredentials: true }).pipe(
    map(resp => resp as string)
  );
}
  public updatePersonEquipment(peq: PersonEquipment): Observable < PersonEquipment > {
  if (peq.id) {
  const body = JSON.stringify(peq);
  return this.http.put(this.urlpe + '/' + peq.id, body, { headers: this.headers, withCredentials: true }).pipe(
    map(resp => resp as PersonEquipment)
  );
} else {
  return null;
}
  }
}
