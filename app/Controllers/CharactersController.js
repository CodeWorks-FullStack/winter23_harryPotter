import { appState } from "../AppState.js";


function _drawCharacters() {
  console.log('this is a test', appState.characters);
}

export class CharactersController {

  constructor() {
    // Listeners 
    appState.on('characters', _drawCharacters)
  }


}
