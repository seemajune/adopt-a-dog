import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { hot, cold } from 'jasmine-marbles';
import { Observable } from 'rxjs/observable';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';

import * as DogActions from './dogs.actions';
import { DogEffects } from './dogs.effects';
import { DogsService } from '../../dogs/dogs.service';

describe('Dog Effects', () => {
  let effects: DogEffects;
  let actions$: Observable<any>;
  let dogService: any;
  const mockDogBreeds = ['shiba'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DogEffects,
        provideMockActions(() => actions$),
        {
          provide: DogsService,
          useValue: jasmine.createSpyObj('DogsService', [
            'getListOfDogs'
          ])
        },
      ],
    });

    effects = TestBed.get(DogEffects);
    dogService = TestBed.get(DogsService);
  });

  it('should load dogs', () => {
    const action = new DogActions.DogsLoading();
    const completion = new DogActions.DogsLoadSuccess(mockDogBreeds);

    actions$ = hot(       '-a-------', { a: action });
    const response = cold('-b|', { b: mockDogBreeds });
    const expected = cold('--c', { c: completion });

    dogService.getListOfDogs.and.returnValue(response);
    expect(effects.loadDogs$).toBeObservable(expected);
  });

  it('should emit a load fail when there is an error', () => {
    const action = new DogActions.DogsLoading();
    const completion = new DogActions.DogsLoadFail();

    actions$ = hot(       '-a--', { a: action });
    const response = cold('-#');
    const expected = cold('--(c|)', { c: completion });

    dogService.getListOfDogs.and.returnValue(response);
    expect(effects.loadDogs$).toBeObservable(expected);
  });
});
