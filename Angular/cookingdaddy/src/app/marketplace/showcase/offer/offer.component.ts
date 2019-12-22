import { Component, OnInit, Input } from '@angular/core';
import { Offer } from '../offer';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  @Input() activeOffer: Offer;

  constructor() { }

  ngOnInit() {
  }

}
