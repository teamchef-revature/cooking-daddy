import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from 'src/app/shared/equipment/equipment';
import { Router, ActivatedRoute } from '@angular/router';
import { EquipmentService } from 'src/app/shared/equipment/equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  @Input() equipment: Equipment;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eqService: EquipmentService) { }

  ngOnInit() {
    const id = + this.route.snapshot.paramMap.get('ninja');
    if (id) {
      this.eqService.getEquipment(id).subscribe(
      equipment => {
        this.equipment = equipment;
      });
    }
  }

}
