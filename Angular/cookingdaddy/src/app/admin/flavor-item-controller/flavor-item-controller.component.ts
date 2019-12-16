import { Component, OnInit, Input } from '@angular/core';
import { Flavor } from '../../shared/ingredient/flavor';
import { AdminService } from '../../shared/person/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flavor-item-controller',
  templateUrl: './flavor-item-controller.component.html',
  styleUrls: ['./flavor-item-controller.component.css']
})
export class FlavorItemControllerComponent implements OnInit {
  @Input() flavor: Flavor;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if ( id ) {
      this.adminService.getFlavor(id).subscribe(
        flavor => {
          this.flavor = flavor;
        });
    }
  }

  editFlavor() {
    this.router.navigate(['/admin/flavor', this.flavor.id]);
  }
}
