import HttpManager from "./HttpManager";
import {GraphQLClient, Variables} from 'graphql-request';
import {DocumentNode} from 'graphql';

export class HttpGraphqlClient implements HttpManager {
   private client: GraphQLClient
   
   constructor() {
      this.client = new GraphQLClient('https://rickandmortyapi.com/graphql', { credentials: 'include' });
   }
   
   get<T, B = undefined, O = undefined>(url: DocumentNode, body?: B, opts?: O): Promise<T> {
      return this.client.request<T>(url, body as Variables, opts as HeadersInit);
   }
   
   post<T, B = undefined, O = undefined>(url: DocumentNode, body?: B, opts?: O): Promise<T> {
      return this.client.request<T>(url, body as Variables, opts as HeadersInit);
   }
}
export const graphClient = new HttpGraphqlClient();
