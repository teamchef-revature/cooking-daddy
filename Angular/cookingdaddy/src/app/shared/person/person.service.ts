import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlService } from '../url.service';
import { Person } from './person';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private liURL = this.url.getUrl() + '/login';
  private loURL = this.url.getUrl() + '/logout';
  private reURL = this.url.getUrl() + '/register';
  private perURL = this.url.getUrl() + '/person';
  private headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
  private person: Person;

  constructor(private url: UrlService, private http: HttpClient) { }

  login(username: string, password: string): Observable<Person> {
    if (username && password) {
      const postbody = `user=${username}&pass=${password}`;
      return this.http.post(this.liURL, postbody,
        {headers: this.headers,
         withCredentials: true
        }).pipe(
          map(resp => {
            const user: Person = resp as Person;
            if (user) {
              this.person = user;
            }
            return user;
          })
        );
    } else {
      return this.http.get(this.liURL, {withCredentials: true}).pipe(
        map(resp => {
          const user: Person = resp as Person;
          if (user) {
            this.person = user;
          }
          return user;
        })
      );
    }
  }

  // tslint:disable-next-line: ban-types
  logout(): Observable<Object> {
    const justabody = `Adios`;
    return this.http.post(this.loURL, justabody, {withCredentials: true}).pipe(
      map(success => {
        this.person = null;
        return success;
      })
    );
  }

  public register(newbie: Person): Observable<Person> {
    const regHeaders = new HttpHeaders( { 'Content-Type': 'application/json' });
    const body = JSON.stringify(newbie); // `person=${newbie}`;
    console.log(body);
    return this.http.post(this.reURL, body, { headers: regHeaders, withCredentials: true }).pipe(
      map( resp => resp as Person )
    );
  }

  getPerson(): Person {
    return this.person;
  }

  isPerson(): boolean {
    return (this.person !== undefined && this.person !== null);
  }
  isPlayer(): boolean {
    return (this.isPerson() && this.person.role.id === 1);
  }
  isAdmin(): boolean {
    return (this.isPerson() && this.person.role.id === 2);
  }
  getPersonById(id): Observable<Person> {
    let p = new Person();
    return this.http.get(this.perURL + '/' + id, {withCredentials: true}).pipe(
      map(resp => {
        p = resp as Person;
        return p;
      }));
  }
}
