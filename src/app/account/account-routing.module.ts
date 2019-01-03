import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountContentComponent} from '@account/components/account-content/account-content.component';
import {AccountDetailComponent} from '@account/components/account-detail/account-detail.component';
import {AccountDashboardComponent} from '@account/components/account-dashboard/account-dashboard.component';
import {AccountNotesComponent} from '@account/components/account-notes/account-notes.component';
import {ComponentWithFormGuard} from '@core/guards/component-with-form-guard.service';

const routes: Routes = [
  {
    path: '',
    component: AccountDashboardComponent,
    children: [
      {
        path: ':id',
        component: AccountContentComponent,
        children: [
          {
            path: '',
            component: AccountDetailComponent,
            canDeactivate: [ComponentWithFormGuard]
          },
          {
            path: 'notes',
            component: AccountNotesComponent
          },
          {
            path: '**',
            redirectTo: ''
          }
        ]
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
