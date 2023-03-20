import {Character} from 'src/shared/entities/CardCharacter';

export interface ICharactersGateway {
   findAllCharacters(): Promise<Character[]>
}
