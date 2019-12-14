import { Pipe, PipeTransform } from '@angular/core';
import { PersonEquipment } from './shared/equipment/person-equipment';

@Pipe({
  name: 'equipment'
})
export class EquipmentPipe implements PipeTransform {

  transform(equipments: PersonEquipment[], searchText: string): PersonEquipment[] {
    if (!equipments) {
      return [];
    }
    if (!searchText) {
      searchText = '';
    }
    searchText = searchText.toLowerCase();
    return equipments.filter(equipment => {
      const searchNumber: number = +searchText;
      const search = equipment.equipment.name.toLowerCase().includes(searchText);
      return search;
    });
  }

}
