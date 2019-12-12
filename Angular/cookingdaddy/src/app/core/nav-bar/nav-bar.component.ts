import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../shared/person/person.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

 isPerson(): boolean {
  return this.personService.isPerson();
 }
}
