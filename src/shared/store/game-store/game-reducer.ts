import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Card } from '../../entities/card';

interface GameState {
   cards: Card[],
   moves: number,
   score: number,
   isPlayerEnabled: boolean
   isGameFinished?: boolean,
}

const initialState: GameState = {
   cards: [],
   moves: 0,
   score: 0,
   isPlayerEnabled: false,
   isGameFinished: undefined
}


const gameSlice = createSlice({
   name: 'game',
   initialState,
   reducers: {
      setBoard(state, action: PayloadAction<Card[]>) {
         return { ...state, cards: action.payload }
      },
      setMoves(state) {
         return { ...state, moves: state.moves + 1 }
      },
      setScore(state) {
         return { ...state, score: state.score + 1 }
      },
      setEnabledPlayer(state, action: PayloadAction<boolean>)  {
         return { ...state, isPlayerEnabled: action.payload }
      },
      shuffleCards(state) {
         const cards = [...state.cards]
            .sort(() => Math.random() - .5)
            .map((card, i) => ({...card, position: i}))
         return { ...state, cards }
      },
      setFinishGame(state, action: PayloadAction<boolean | undefined>) {
         return {...state, isGameFinished: action.payload}
      },
      resetGame() {
         return {...initialState}
      }
   }
})

export default gameSlice.reducer
export const {setBoard, shuffleCards, setScore, setMoves, setEnabledPlayer, setFinishGame, resetGame} = gameSlice.actions
