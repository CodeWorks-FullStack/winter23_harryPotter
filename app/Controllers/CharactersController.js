import { appState } from "../AppState.js";
import { charactersService } from "../Services/CharactersService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawCharacters() {
  let template = ''
  appState.characters.forEach(c => template += c.CharacterCard)
  setHTML('characters', template)
}

export class CharactersController {

  constructor() {
    // Listeners 
    appState.on('characters', _drawCharacters)
    this.getCharacters()
  }


  async getCharacters() {
    try {
      // not my responsibility says the controller
      // I will ask the service to take care of this
      await charactersService.getCharacters()
    } catch (error) {
      Pop.error(error) // handle it the lazy way (works 99.9% of the time)
    }
  }



}
