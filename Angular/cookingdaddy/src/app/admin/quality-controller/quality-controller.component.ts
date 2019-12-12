import { Component, OnInit, Input } from '@angular/core';
import { Quality } from '../../shared/ingredient/quality';
import { IngredientService } from '../../shared/ingredient/ingredient.service';

@Component({
  selector: 'app-quality-controller',
  templateUrl: './quality-controller.component.html',
  styleUrls: ['./quality-controller.component.css']
})
export class QualityControllerComponent implements OnInit {
  qualities: Quality[];
  quality: Quality;
  constructor( private ingredientService: IngredientService ) { }

  ngOnInit() {
    this.quality = new Quality();
    this.ingredientService.getQualities().subscribe(
      (q) => {
        this.qualities = q;
        this.qualities.sort( (q1, q2) => q1.id - q2.id );
      }
    );
  }

  submit(): void {
    this.ingredientService.addQuality( this.quality ).subscribe( resp => {
      this.quality = new Quality();
      this.qualities.push( resp) ;
    });
  }
}
