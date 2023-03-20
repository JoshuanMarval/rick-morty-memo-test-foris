export class Character {
   id: number
   image: string
   name: string
   species: string
   status: string
   
   constructor({id, image, name, species, status}: ConstructorProps) {
      this.id = id;
      this.image = image;
      this.name = name;
      this.species = species;
      this.status = status;
   }
   
}

type ConstructorProps = {
   id: number,
   image: string,
   name: string,
   species: string,
   status: string
}
