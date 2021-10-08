import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing-module';
import { EnveloppeComponent } from './components/enveloppe/enveloppe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { EnseignantComponent } from './components/enseignant/enseignant.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [EnveloppeComponent, DashboardComponent, EtudiantComponent, EnseignantComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
