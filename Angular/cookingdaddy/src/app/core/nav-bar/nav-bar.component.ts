import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../shared/person/person.service';
import { Person } from '../../shared/person/person';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private person: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.person = this.personService.getPerson();
  }

  isPerson(): boolean {
    if (this.personService.isPerson()) {
      this.person = this.personService.getPerson();
      return true;
    } else {
      this.person = null;
      return false;
    }
  }
  logout() {
    this.personService.logout().subscribe(
      resp => {
        this.person = null;
      });
  }
}
