import { Component, OnInit } from '@angular/core';
import { Flavor } from '../../shared/ingredient/flavor';
import { IngredientService } from '../../shared/ingredient/ingredient.service';

@Component({
  selector: 'app-flavor-controller',
  templateUrl: './flavor-controller.component.html',
  styleUrls: ['./flavor-controller.component.css']
})
export class FlavorControllerComponent implements OnInit {
  flavors: Flavor[];
  flavor: Flavor;

  constructor( private ingredientService: IngredientService ) { }

  ngOnInit() {
    this.flavor = new Flavor();
    this.ingredientService.getFlavors().subscribe(
      (f) => {
        this.flavors = f;
        this.flavors.sort( (f1, f2) => f1.id - f2.id );
      }
    );
  }

  submit(): void {
    this.ingredientService.addFlavor( this.flavor ).subscribe( resp => {
      this.flavor = new Flavor();
      this.flavors.push( resp );
    });
  }
}
