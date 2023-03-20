import { Component } from '@angular/core';

@Component({
  selector: 'app-fiche-personne',
  templateUrl: './fiche-personne.component.html',
  styleUrls: ['./fiche-personne.component.scss']
})
export class FichePersonneComponent {
  nom:string = "John";
  prenom:string = "Doe";
  age:number = 33;
  retraite:number = 65-this.age;
}
