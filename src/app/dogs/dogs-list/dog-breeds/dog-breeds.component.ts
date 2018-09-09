import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { getDogsBySize } from '../../../store/dogs/dogs.selectors';
import { ActivatedRoute } from '@angular/router';

// TODO: move large & small to reusubale dumb/smart components - dog-breeds.component.ts

@Component({
  selector: 'app-dog-breeds',
  styleUrls: ['../../dog-details/dog-details.component.css'],
  templateUrl: './dog-breeds.component.html'
})

export class DogBreedsComponent implements OnInit {
  dogs$: Observable<String[]>;
  dog: any;

  @Output() breedClicked = new EventEmitter<String>();

  constructor(private store: Store<any>,
    private route: ActivatedRoute) { }

  selectDog(dog) {
    this.dog = dog;
    this.breedClicked.emit(this.dog);
  }

  isSelected(dog) {
    return this.dog === dog;
  }

  ngOnInit() {
    this.dogs$ = this.store.select(getDogsBySize(this.route.snapshot.routeConfig.path));
  }
}
