import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServicesService} from '../../../services.service';
import {Router} from '@angular/router';
import {ApiServiceService} from '../../services/api-service.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent implements OnInit {
  erroMessage = '';
  nomprenom = '';

  constructor(private servicesService: ApiServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }

  inscription(inscriptionForm: NgForm): void {
    this.servicesService.inscritEnseignant(inscriptionForm.value).subscribe(
      (data) => {
        this.nomprenom = data.nom + ' ' + data.prenom;
        console.log(this.nomprenom)
        this.erroMessage = '';
        this.router.navigate(['/dashboard', this.nomprenom]);
    }
    );
  }
}
