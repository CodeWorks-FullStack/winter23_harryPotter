
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

}
