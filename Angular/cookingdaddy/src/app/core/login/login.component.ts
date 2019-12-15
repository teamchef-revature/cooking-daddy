import { Component, OnInit } from '@angular/core';
import { Person } from '../../shared/person/person';
import { PersonService } from '../../shared/person/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public activePerson: Person;
  public username: string;
  public password: string;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.personService.login(null, null).subscribe(
      resp => {
        this.activePerson = resp;
      });
  }

  login() {
    this.personService.login(this.username, this.password).subscribe(
      resp => {
        this.activePerson = resp;
      },
      error => {
        this.checkLogin();
        this.router.navigate(['']);
      }
      );
  }

  checkLogin() {
    if(!this.activePerson) {
      window.alert('Login failed. Please try again.');
      this.username = '';
      this.password = '';
    }
  }

  logout() {
    this.personService.logout().subscribe(
      resp => {
        this.activePerson = null;
      });
  }

  isPerson(): boolean {
    if (this.personService.isPerson()) {
      this.activePerson = this.personService.getPerson();
      return true;
    } else {
      this.activePerson = null;
      return false;
    }
  }
}
