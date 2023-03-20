import {characterGateway, CharactersGateway} from '../../../../pages/game-page/services/characters-gateway';
import {Character} from '../../../../shared/entities/character';
import {ICharactersGateway} from '../../../../pages/game-page/domain/i-characters-gateway';

export class FindAllCharacters {
   constructor(private _gateway: ICharactersGateway) {
   }
   
   async run(): Promise<Character[]> {
      return this._gateway.findAllCharacters()
   }
}

export const findAllCharacters = new FindAllCharacters(characterGateway)
