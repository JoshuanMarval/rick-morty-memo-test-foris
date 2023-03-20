import {graphClient, HttpGraphqlClient} from '../../../../src/core/config/http/HttpGraphqlClient';
import {Character} from '../../../shared/entities/character';
import {CharacterModel} from '../../../../src/pages/game-page/services/models/CharacterModel';
import {GET_CHARACTERS_QUERY} from './graphql/characters-gql';

type CharactersParams = { ids: number[] }
type CharacterResp = { charactersByIds: CharacterModel[] }

export class CharactersService {
   constructor(private _http: HttpGraphqlClient) {}
   
   findAllApiCharacters():Promise<Character[]> {
      return this._http.get<CharacterResp, CharactersParams>(GET_CHARACTERS_QUERY, { ids: [1,2,3,4,5,6] })
         .then(( {charactersByIds} ) => {
            return CharacterModel.toDomain(charactersByIds);
         })
         .catch(e => {
            throw e;
         });
   }
}
export const charactersService = new CharactersService(graphClient);
