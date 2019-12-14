import { Component, OnInit, Input } from '@angular/core';
import { Flavor } from 'src/app/shared/ingredient/flavor';

@Component({
  selector: 'app-flavor-item-controller',
  templateUrl: './flavor-item-controller.component.html',
  styleUrls: ['./flavor-item-controller.component.css']
})
export class FlavorItemControllerComponent implements OnInit {
  @Input() flavor: Flavor;
  constructor() { }

  ngOnInit() {
  }

}
