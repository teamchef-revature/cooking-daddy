import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../shared/person/person.service';
import { Person } from '../../shared/person/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private person: Person;

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
    this.person = this.personService.getPerson();
  }

  isPerson(): boolean {
    return this.personService.isPerson();
  }

  logout() {
    this.personService.logout().subscribe(
      resp => {
        this.router.navigate(['/home']);
      });
  }
}
