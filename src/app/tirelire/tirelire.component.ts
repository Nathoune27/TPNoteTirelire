import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tirelire',
  templateUrl: './tirelire.component.html',
  styleUrls: ['./tirelire.component.scss']
})
export class TirelireComponent {
  
  @Input()
  montant: number = 0;
  
  @Output()
  myCustomEvent: EventEmitter<number> = new EventEmitter<number>();

  Consommer(){
    this.myCustomEvent.emit(this.montant);
  }
}
