import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/shared/person';
import { PersonService } from 'src/app/shared/person.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public activePerson: Person;
  public username: string;
  public password: string;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  login() {
  }

  logout() {
  }

}
