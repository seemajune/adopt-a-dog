import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs/observable/of';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { DogsListComponent } from './dogs-list.component';
import { DogsService } from '../dogs.service';

describe('DogsListComponent', () => {
  let component: DogsListComponent;
  let fixture: ComponentFixture<DogsListComponent>;

  const mockDogs = [
    {
      size: 'large',
      breeds: [
        {
          breed: 'mockBreed'
        }
      ]
    }
  ];

  const mockStore = {
    select(fn) {
      return of(mockDogs);
    },
    dispatch(fn) {
    }
  };

  const mockService = {
    getListOfDogs() {
      return mockDogs;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsListComponent ],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: Store, useValue: mockStore },
        { provide: DogsService, useValue: mockService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render anchor tags for dogs by size', () => {
    const dogList = fixture.debugElement.nativeElement;
    expect(dogList.querySelector('a').textContent).toContain(mockDogs[0].size);
  });
});
