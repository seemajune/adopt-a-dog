import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsListComponent } from './dogs-list/dogs-list.component';
import { CardComponent } from './card/card.component';
import { DogDetailsComponent } from './dog-details/dog-details.component';
import { DogBreedsComponent } from './dogs-list/dog-breeds/dog-breeds.component';

@NgModule({
  imports: [
    CommonModule,
    DogsRoutingModule
  ],
  declarations: [
    DogsListComponent,
    DogBreedsComponent,
    CardComponent,
    DogDetailsComponent
  ]
})
export class DogsModule { }
