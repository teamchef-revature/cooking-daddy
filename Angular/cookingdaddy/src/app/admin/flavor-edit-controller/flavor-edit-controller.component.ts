import { Component, OnInit } from '@angular/core';
import { Flavor } from '../../shared/ingredient/flavor';
import { AdminService } from '../../shared/person/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flavor-edit-controller',
  templateUrl: './flavor-edit-controller.component.html',
  styleUrls: ['./flavor-edit-controller.component.css']
})
export class FlavorEditControllerComponent implements OnInit {
  public flavor: Flavor;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.flavor = new Flavor();
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adminService.getFlavor(id).subscribe(
        flavor => {
          this.flavor = flavor;
        });
    } else {
      this.flavor = new Flavor();
    }
  }

  submit(): void {
    this.adminService.updateFlavor(this.flavor).subscribe(
      flavor => {
        this.flavor = flavor;
        this.router.navigate(['/admin/flavor']);
      });
  }

  cancel(): void {
    this.router.navigate(['/admin/flavor']);
  }

}
