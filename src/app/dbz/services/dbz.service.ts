import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';


import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
  },{
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }];


  addCharacter( character : Character ):void {
    //Con lo de la linea siguiente se indica que tome todas las propiedades del objeto Character esparcelas en el nuevo objeto ---->>> { id: uuid(), ...character}
    const newCharacter: Character = { id: uuid(), ...character};

    this.characters.push(newCharacter);
  }

  //onDeleteCharacter( index:number ){
    // Si lo dejo solo como (index) borro todos los elementos, el numero 1 despues de la coma indica que borrar solo un elemento.
  //  this.characters.splice(index,1);
  deleteCharacterById( id:string ){
    // Aca se indica que el filter regresa un nuevo arreglo con la condicion indicada entre parentesis.
    this.characters = this.characters.filter ( character => character.id !== id );
  }

}
