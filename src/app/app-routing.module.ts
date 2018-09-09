import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
      path: 'dogs',
    //   canActivate [CanActivateRouteGuard],
      loadChildren: 'app/dogs/dogs.module#DogsModule',
      data: { state: 'dogs' }
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full',
      data: { state: 'home' }
    }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
