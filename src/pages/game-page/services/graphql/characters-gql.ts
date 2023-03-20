import gql from 'graphql-tag';

export const GET_CHARACTERS_QUERY = gql`
   query ($ids: [ID!]!) {
      charactersByIds(ids: $ids) {
        id
        name
        image
        status
        species
  }
}`;
