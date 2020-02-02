import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from './models';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(
    private readonly http: HttpClient
  ) {
  }

  public getPlace(id: string): Observable<Place> {
    return this.http.get<Place>(`/api/v1/places/${id}`);
  }

}
