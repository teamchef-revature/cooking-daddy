import { Component, OnInit } from '@angular/core';
import { Quality } from '../../shared/ingredient/quality';
import { AdminService } from '../../shared/person/admin.service';

@Component({
  selector: 'app-quality-controller',
  templateUrl: './quality-controller.component.html',
  styleUrls: ['./quality-controller.component.css']
})
export class QualityControllerComponent implements OnInit {
  qualities: Quality[];
  quality: Quality;
  constructor( private adminService: AdminService ) { }

  ngOnInit() {
    this.quality = new Quality();
    this.adminService.getQualities().subscribe(
      (q) => {
        this.qualities = q;
        this.qualities.sort( (q1, q2) => q1.id - q2.id );
      });
  }

  submitted() {
    this.qualities.push(this.quality);
    this.quality = new Quality();
  }
}
