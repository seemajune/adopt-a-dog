import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogsListComponent } from './dogs-list/dogs-list.component';
import { DogBreedsComponent } from './dogs-list/dog-breeds/dog-breeds.component';

const routes: Routes = [
  {
    path: '',
    component: DogsListComponent,
    children: [
      { path: 'small', component: DogBreedsComponent },
      { path: 'large', component: DogBreedsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule {}
