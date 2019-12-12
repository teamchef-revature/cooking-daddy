import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person/person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  isPerson(): boolean {
    return this.personService.isPerson();
  }
}
