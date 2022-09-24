import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { DepositmoneyComponent } from './components/depositmoney/depositmoney.component';
import { HomeComponent } from './components/home/home.component';

import { WithdrawmoneyComponent } from './components/withdrawmoney/withdrawmoney.component';

const routes: Routes = [
{
  path: 'checkbalance',
  component: CheckbalanceComponent
},
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'depositmoney',
  component: DepositmoneyComponent
},
{
  path: 'withdrawmoney',
  component: WithdrawmoneyComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
