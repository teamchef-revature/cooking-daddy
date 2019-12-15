import { Component, OnInit } from '@angular/core';
import { Quality } from '../../shared/ingredient/quality';
import { AdminService } from '../../shared/person/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-quality-edit-controller',
  templateUrl: './quality-edit-controller.component.html',
  styleUrls: ['./quality-edit-controller.component.css']
})
export class QualityEditControllerComponent implements OnInit {
  public quality: Quality;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.quality = new Quality();
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adminService.getQuality(id).subscribe(
        quality => {
          this.quality = quality;
        });
    } else {
      this.quality = new Quality();
    }
  }

  submit(): void {
    this.adminService.updateQuality(this.quality).subscribe(
      quality => {
        this.quality = quality;
        this.router.navigate(['/admin/quality']);
      });
  }

  cancel(): void {
    this.router.navigate(['/admin/quality']);
  }
}
