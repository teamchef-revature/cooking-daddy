import { Component, OnInit } from '@angular/core';
import { Flavor } from '../../shared/ingredient/flavor';
import { AdminService } from '../../shared/person/admin.service';
@Component({
  selector: 'app-flavor-controller',
  templateUrl: './flavor-controller.component.html',
  styleUrls: ['./flavor-controller.component.css']
})
export class FlavorControllerComponent implements OnInit {
  flavors: Flavor[];
  flavor: Flavor;

  constructor( private adminService: AdminService ) { }

  ngOnInit() {
    this.flavor = new Flavor();
    this.adminService.getFlavors().subscribe(
      (f) => {
        this.flavors = f;
        this.flavors.sort( (f1, f2) => f1.id - f2.id );
      });
  }
}
