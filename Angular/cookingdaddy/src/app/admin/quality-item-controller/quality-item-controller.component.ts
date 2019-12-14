import { Component, OnInit, Input } from '@angular/core';
import { Quality } from '../../shared/ingredient/quality';

@Component({
  selector: 'app-quality-item-controller',
  templateUrl: './quality-item-controller.component.html',
  styleUrls: ['./quality-item-controller.component.css']
})
export class QualityItemControllerComponent implements OnInit {
  @Input() quality: Quality;
  constructor() { }

  ngOnInit() {
  }

}
