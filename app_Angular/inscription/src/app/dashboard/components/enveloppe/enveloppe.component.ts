import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enveloppe',
  templateUrl: './enveloppe.component.html',
  styleUrls: ['./enveloppe.component.scss']
})
export class EnveloppeComponent implements OnInit {
  isExpanded = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
