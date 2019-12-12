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
  }

  submit(): void {
    this.personService.register(this.person).subscribe(
      person => {
        this.person = person;
        this.router.navigate(['/home']);
      }
    );
  }
}
