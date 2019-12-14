import { Component, OnInit, Input } from '@angular/core';
import { Equipment } from 'src/app/shared/equipment/equipment';
import { EquipmentService } from 'src/app/shared/equipment/equipment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  @Input() equipment: Equipment;

  constructor(
    private eqserv: EquipmentService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('ninja');
    if (id) {
      this.eqserv.getEquipment(id).subscribe(
        resp => {
          this.equipment = resp;
        }
      );
    }
  }

}
