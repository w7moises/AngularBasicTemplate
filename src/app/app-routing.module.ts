import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OutcomesComponent } from './components/outcomes/outcomes.component';
import { HomeComponent } from './components/home/home/home.component';
import { CreateOutcomeComponent } from './components/outcomes/create/create-outcome/create-outcome.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'outcomes', component: OutcomesComponent},
  {path: 'outcomes/create', component: CreateOutcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
