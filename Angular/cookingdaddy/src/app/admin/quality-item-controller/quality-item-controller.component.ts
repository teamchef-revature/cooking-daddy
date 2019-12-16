import { Component, OnInit, Input } from '@angular/core';
import { Quality } from '../../shared/ingredient/quality';
import { AdminService } from '../../shared/person/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quality-item-controller',
  templateUrl: './quality-item-controller.component.html',
  styleUrls: ['./quality-item-controller.component.css']
})
export class QualityItemControllerComponent implements OnInit {
  @Input() quality: Quality;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.adminService.getQuality(id).subscribe(
        quality => {
          this.quality = quality;
        });
    }
  }

  editQuality() {
    this.router.navigate(['/admin/quality', this.quality.id]);
  }
}
