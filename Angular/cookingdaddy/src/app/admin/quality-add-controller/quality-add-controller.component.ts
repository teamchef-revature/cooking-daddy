import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Quality } from '../../shared/ingredient/quality';
import { AdminService } from '../../shared/person/admin.service';

@Component({
  selector: 'app-quality-add-controller',
  templateUrl: './quality-add-controller.component.html',
  styleUrls: ['./quality-add-controller.component.css']
})
export class QualityAddControllerComponent implements OnInit {
  // tslint:disable-next-line: ban-types
  @Output() created = new EventEmitter<Boolean>();
  @Input() quality: Quality;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  addQuality() {
    this.adminService.addQuality(this.quality).subscribe(
      quality => {
        this.quality = quality;
        this.created.emit(true);
      });
  }
}
