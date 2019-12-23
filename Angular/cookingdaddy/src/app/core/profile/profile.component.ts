import { Component, OnInit } from '@angular/core';
import { Person } from '../../shared/person/person';
import { PersonService } from '../../shared/person/person.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private currentPerson: Person;

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.currentPerson = this.personService.getPerson();
  }
}
