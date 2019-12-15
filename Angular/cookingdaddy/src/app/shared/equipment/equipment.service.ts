import { Injectable } from '@angular/core';
import { UrlService } from '../url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipment } from './equipment';
import { map } from 'rxjs/operators';
import { Quality } from '../ingredient/quality';
import { stringify } from 'querystring';
import { PersonEquipment } from './person-equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  private appUrl = this.urlService.getUrl();
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private urlService: UrlService, private http: HttpClient) { }

  public getEquipments(): Observable<Equipment[]> {
    return this.http.get(this.appUrl + '/equipment', { withCredentials: true }).pipe(
      map(resp => resp as Equipment[])
    );
  }
  public getEquipment(id: number): Observable<Equipment> {
    return this.http.get(this.appUrl + '/equipment/' + id).pipe(
      map(resp => resp as Equipment)
    );
  }
  // just for ease for creating equipment
  public getQualities(): Observable<Quality[]> {
    return this.http.get(this.appUrl + '/quality', { withCredentials: true }).pipe(map(resp => resp as Quality[]));
  }
  // code to test in future for making equipment/PersonEquipment, should give URI of created objects
  public addEquipment(eq: Equipment): Observable<string> {
    const body = stringify(eq);
    return this.http.post(this.appUrl + '/equipment', body, { withCredentials: true }).pipe(
      map(resp => resp as string)
    );
  }
  public addPersonEquipment(peq: PersonEquipment): Observable<string> {
    const body = stringify(peq);
    return this.http.post(this.appUrl + '/personEquipment', body, { withCredentials: true }).pipe(
      map(resp => resp as string)
    );
  }
  public updatePersonEquipment(peq: PersonEquipment): Observable<PersonEquipment> {
    if (peq.id) {
      const body = stringify(peq);
      return this.http.put(this.appUrl + '/personEquipment/' + peq.id, body, { withCredentials: true }).pipe(
        map(resp => resp as PersonEquipment)
      );
    } else {
      return null;
    }
  }
}
