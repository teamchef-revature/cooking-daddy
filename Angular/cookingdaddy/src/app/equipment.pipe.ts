import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'equipment'
})
export class EquipmentPipe implements PipeTransform {

  transform(ingredients: PersonEquipment[], searchText: string): PersonEquipment[] {
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
