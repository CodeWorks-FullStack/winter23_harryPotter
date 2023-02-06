
export class Character {

  constructor(data) {
    // NOTE
    // this is my side
    // data is the api side
    // aka I have no control of the data side
    this.id = data.id
    this.name = data.name
    this.house = data.house
    this.image = data.image
    this.alive = data.alive
    this.species = data.species
    this.wizard = data.wizard
    this.ancestry = data.ancestry
    this.wand = data.wand
    this.patronus = data.patronus
    this.student = data.hogwartsStudent
    this.staff = data.hogwartsStaff
  }


  get CharacterCard() {
    return /*html*/`
    <div class="col-md-3 my-3">
        <div class="card ${this.alive ? 'living' : 'dead'} " >
          <img src="${this.image}" alt="">
          <div class="card-body">
            <p><b>${this.name}</b> ${this.alive ? this.HouseIcon : '🪦'}</p>
          </div>
        </div>
    </div>
    `
  }


  get HouseIcon() {
    switch (this.house) {
      case 'Hufflepuff':
        return '🦡'
      case 'Slytherin':
        return '🐍'
      case 'Ravenclaw':
        return '🐧'
      case 'Gryffindor':
        return '🦁'
      default:
        return '🍺'
    }
  }

}
