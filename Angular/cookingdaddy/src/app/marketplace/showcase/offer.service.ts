import { Injectable } from '@angular/core';
import { UrlService } from 'src/app/shared/url.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from './offer';
import { map } from 'rxjs/operators';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private appUrl = this.urlSer.getUrl() + '/market';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(
    private urlSer: UrlService,
    private http: HttpClient) { }
  public getOffers(): Observable<Offer[]> {
    return this.http.get(this.appUrl + '/offer', { withCredentials: true }).pipe(map(resp => resp as Offer[]));
  }
  public getOffer(id: number): Observable<Offer> {
    const url: string = this.appUrl + '/offer/' + id;
    return this.http.get(url, { withCredentials: true }).pipe(
      map(resp => resp as Offer));
  }
  public updateOffer(o: Offer) {
    const body = JSON.stringify(o);
    if (o.id) {
      return this.http.put(this.appUrl + '/offer/' + o.id, body, {
        headers: this.headers, withCredentials: true
      }).pipe(map(resp => resp as Offer));
    }
  }
  public addOffer(o: Offer) {
    const body = JSON.stringify(o);
    return this.http.post(this.appUrl + '/offer', body, {
      headers: this.headers, withCredentials: true
    }).pipe(map(resp => resp as Offer));
  }
  public getStatuses(): Observable<Status[]> {
    return this.http.get(this.appUrl + '/status', { withCredentials: true }).pipe(map(resp => resp as Status[]));
  }
}
