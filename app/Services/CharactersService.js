import { appState } from "../AppState.js";
import { Character } from "../Models/Character.js";
import { hp_api } from "./AxiosService.js";

class CharactersService {

  // REVIEW step 3 do the async axios stuff
  async getCharacters() {
    // most async stuff will look like this
    const res = await hp_api.get('api/characters')
    console.log('what the heck is the ', res.data);
    // REVIEW step 4 convert your array of raw data into your class data
    const charactersIWant = res.data.filter(c => c.image).map(c => new Character(c))
    console.log({charactersIWant})
    appState.characters = charactersIWant // lets see what this does
  }

}
export const charactersService = new CharactersService()
