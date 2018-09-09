import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/exhaustMap';

import * as DogActions from './dogs.actions';
import { DogsService } from '../../dogs/dogs.service';
import { Action } from '@ngrx/store';
import { of } from 'rxjs/observable/of';
import { catchError, concatMap } from 'rxjs/operators';

@Injectable()
export class DogEffects {

  constructor(private actions$: Actions, private dogService: DogsService) {}
  /* tslint:disable-next-line */
  @Effect()
  loadDogs$: Observable<Action> = this.actions$
    .ofType(DogActions.DOGS_LOADING)
    .exhaustMap((action: any) => this.dogService.getListOfDogs())
    .pipe(
      concatMap(data => [new DogActions.DogsLoadSuccess(data)]),
      catchError(err => {
        return of(new DogActions.DogsLoadFail());
      })
    );
}
