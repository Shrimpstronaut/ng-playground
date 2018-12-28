import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountDashboardComponent} from '@account/components/account-dashboard/account-dashboard.component';
import {AccountContentComponent} from '@account/components/account-content/account-content.component';

const routes: Routes = [
  {
    path: '',
    component: AccountDashboardComponent,
    children: [
      {
        path: ':id',
        component: AccountContentComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {
}
