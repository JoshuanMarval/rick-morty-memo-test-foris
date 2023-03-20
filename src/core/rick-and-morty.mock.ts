import {Card} from '../shared/entities/card';
import c1 from 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
import c2 from 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
import c3 from 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
import c4 from 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
import c5 from 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
import c6 from 'https://rickandmortyapi.com/api/character/avatar/6.jpeg'

export const CARDS_MOCK: Card[] = [
   {id:1, image: c1, name: 'Rick Sanchez', status: 'Alive', species: 'Human', position: undefined, isFlipped: true, isMatched: false },
   {id:2, image: c2, name: 'Morty Smith', status: 'Alive', species: 'human', position: undefined, isFlipped: true, isMatched: false },
   {id:3, image: c3, name: 'Summer Smith', status: 'Alive', species: 'human', position: undefined, isFlipped: true, isMatched: false },
   {id:4, image: c4, name: 'Beth Smith', status: 'Alive', species: 'human', position: undefined, isFlipped: true, isMatched: false },
   {id:5, image: c5, name: 'Jerry Smith', status: 'Alive', species: 'human', position: undefined, isFlipped: true, isMatched: false },
   {id:6, image: c6, name: 'Abadango Cluster Princess', status: 'Alive', species: 'Alien', position: undefined, isFlipped: true, isMatched: false },
]
