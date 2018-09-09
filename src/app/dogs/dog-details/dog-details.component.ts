import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-dog-details',
    styleUrls: ['./dog-details.component.css'],
    templateUrl: './dog-details.component.html'
  })

  export class DogDetailsComponent {
    @Input() dog;

    constructor(private store: Store<any>) { }

  }
