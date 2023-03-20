import { Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.scss']
})
export class BoiteComponent {
  receivedValue: number = 0;
  montantTirelire1: number = 0;
  montantTirelire2: number = 0;
  montantTirelire3: number = 0;
  nbrTirelire: number = 1;
  processEventChild(){
    this.montantTirelire1 += 100;
  }
  ajouterFr(){
    this.nbrTirelire =Math.floor(Math.random() * 3);
    if(this.nbrTirelire == 0){
      this.montantTirelire1 += 100;
    }
    else if (this.nbrTirelire == 1){
      this.montantTirelire2 += 100;
    }
    else if (this.nbrTirelire == 2){
      this.montantTirelire3 += 100;
    }
  }
}
