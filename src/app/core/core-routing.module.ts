import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const appBaseRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'accounts',
    loadChildren: '../account/account.module#AccountModule'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appBaseRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {
}
