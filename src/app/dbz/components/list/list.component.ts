import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  // onDelete
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
 // public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(id?: string):void{
    // Indico que si no hay un id no retorne nada.
    if ( !id ) return;
    this.onDelete.emit( id );
  }
}
