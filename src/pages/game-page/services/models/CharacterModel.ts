import { Character } from '../../../../shared/entities/character';


export class CharacterModel {
   id: number;
   name: string;
   status: string;
   species: string;
   type: string;
   gender: string;
   origin: Origin;
   location: Location;
   image: string;
   episode: string[];
   url: string;
   created: Date;
   
   constructor({
                  id,
                  name,
                  status,
                  species,
                  type,
                  gender,
                  origin,
                  location,
                  image,
                  episode,
                  url,
                  created
               }:ConstructorProps) {
      this.id = id;
      this.name = name;
      this.status = status;
      this.species = species;
      this.type = type;
      this.gender = gender;
      this.origin = origin;
      this.location = location;
      this.image = image;
      this.episode = episode;
      this.url = url;
      this.created = created;
   }
   
   static toDomain(data: CharacterModel[]): Character[] {
      return data.map(character => new Character({
         id: character.id,
         image: character.image,
         name: character.name,
         species: character.species,
         status: character.status,
      }))
   }

}

type ConstructorProps = {
   id: number;
   name: string;
   status: string;
   species: string;
   type: string;
   gender: string;
   origin: Origin;
   location: Location;
   image: string;
   episode: string[];
   url: string;
   created: Date;
}

export interface Origin {
   name: string;
   url: string;
}

export interface Location {
   name: string;
   url: string;
}
