import {charactersService, CharactersService} from '../../../../src/pages/game-page/services/characters-service';
import {ICharactersGateway} from '../../../../src/pages/game-page/domain/i-characters-gateway';
import {Character} from '../../../shared/entities/character';

export class CharactersGateway implements ICharactersGateway {
   constructor(private _service: CharactersService) {
   }
   
   findAllCharacters(): Promise<Character[]> {
      return this._service.findAllApiCharacters();
   }
}

export const characterGateway = new CharactersGateway(charactersService)
