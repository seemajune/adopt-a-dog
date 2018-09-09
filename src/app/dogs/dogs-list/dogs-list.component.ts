import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as Actions from '../../store/dogs/dogs.actions';
import { getDogs } from '../../store/dogs/dogs.selectors';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent implements OnInit {
  dogs$: Observable<String[]>;

  constructor(private store: Store<any>, private service: DogsService) { }

  fetchDogs() {
    this.store.dispatch(new Actions.DogsLoading());
  }

  ngOnInit() {
    this.fetchDogs();
    this.dogs$ = this.store.select(getDogs);
  }

}
