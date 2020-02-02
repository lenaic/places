import { Component, OnInit } from '@angular/core';
import { PlaceService } from './place.service';
import { Observable, zip } from 'rxjs';
import { Place } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  places$: Observable<Place[]>;

  constructor(
    private readonly placeService: PlaceService
  ) {
  }

  ngOnInit() {
    const placeIds = [ 'GXvPAor1ifNfpF0U5PTG0w', 'ohGSnJtMIC5nPfYRi_HTAg' ];
    this.places$ = zip(...placeIds.map(id => this.placeService.getPlace(id)));
  }

}
