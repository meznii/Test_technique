import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnveloppeComponent} from './components/enveloppe/enveloppe.component';
import {EtudiantComponent} from './components/etudiant/etudiant.component';
import {EnseignantComponent} from './components/enseignant/enseignant.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: EnveloppeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'dashboard/:id',
        component: DashboardComponent
      },
      {
        path: 'etudiant',
        component: EtudiantComponent
      },
      {
        path: 'enseignant',
        component: EnseignantComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
