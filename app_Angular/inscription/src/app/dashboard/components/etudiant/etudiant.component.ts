import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ServicesService} from '../../../services.service';
import {Router} from '@angular/router';
import {ApiServiceService} from '../../services/api-service.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  erroMessage = '';
  nomprenom = '';
  constructor(private apiservice: ApiServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }
  inscription(inscriptionForm: NgForm): void {
    this.apiservice.inscritEtudiant(inscriptionForm.value).subscribe(
      (data) => {
        this.nomprenom = data.nom + ' ' + data.prenom;
        console.log(this.nomprenom)
        this.erroMessage = '';
        this.router.navigate(['/dashboard', this.nomprenom]);
      }
    );
  }
}
