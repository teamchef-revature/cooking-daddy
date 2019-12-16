import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../../shared/person/person';
import { PersonService } from '../../shared/person/person.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public person: Person;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.person = new Person();
  }

  submit() {
    console.log(this.person);
    this.personService.register(this.person).subscribe(
      person => {
        this.person = person;
        this.loginPerson();
        this.router.navigate(['']);
      },
      error => {
        this.checkRegister();
        this.router.navigate(['']);
      }
    );
    /*this.personService.login(this.person.username, this.person.password).subscribe(
      person => {
        this.person = person;
      },
      error => {
        this.router.navigate(['']);
      }
    );*/
    this.router.navigate(['']);
  }

  loginPerson() {
    this.personService.login(this.person.username, this.person.password).subscribe(
      person => {
        this.person = person;
      },
      error => {
        this.router.navigate(['']);
      }
    );
  }

  checkRegister() {
    window.alert('Sorry, a user already exists with that username. Try again.');
    this.person.username = '';
    this.person.password = '';
  }

  isPerson(): boolean {
    return this.personService.isPerson();
  }
  isPlayer(): boolean {
    return this.personService.isPlayer();
  }
  isAdmin(): boolean {
    return this.personService.isAdmin();
  }
}
