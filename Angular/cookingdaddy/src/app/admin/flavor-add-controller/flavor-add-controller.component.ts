import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Flavor } from '../../shared/ingredient/flavor';
import { AdminService } from '../../shared/person/admin.service';

@Component({
  selector: 'app-flavor-add-controller',
  templateUrl: './flavor-add-controller.component.html',
  styleUrls: ['./flavor-add-controller.component.css']
})
export class FlavorAddControllerComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  @Output() created = new EventEmitter<Boolean>();
  @Input() flavor: Flavor;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addFlavor() {
    this.adminService.addFlavor(this.flavor).subscribe(
      flavor => {
        this.flavor = flavor;
        this.created.emit(true);
      });
  }
}
