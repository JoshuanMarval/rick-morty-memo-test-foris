import { AppThunk } from "../store-types";
import { Card } from "../../entities/card";
import {findAllCharacters} from '../../../pages/game-page/domain/usecases/find-all-characters';
import {resetGame, setBoard, setEnabledPlayer, setFinishGame, setMoves, setScore, shuffleCards} from "./game-reducer";

const LIMIT_SCORE = 6
let cardsRepository: Card[] = []

export const fetchCharactersAction = (): AppThunk => {
   return async (dispatch, getState) => {
      const {isGameFinished} = getState().game
      dispatch(resetGame())
  
      if (cardsRepository.length > 0) {
         dispatch(setBoard(cardsRepository));
         if (isGameFinished === false) {
            dispatch(playGameAction())
         }
         return
      }
      
      let doubledCards: Card[] = []
      
      findAllCharacters
         .run()
         .then(data => data.forEach((card, i) => {
            doubledCards = [...doubledCards,
               {...card, isFlipped: false},
               {...card, isFlipped: false}
            ] as Card[]

            cardsRepository = doubledCards
            dispatch(setBoard(doubledCards));
         }))
         .catch(e => e)
   };
};

export const playGameAction = (): AppThunk => {
   return async (dispatch, getState) => {
      dispatch(setFinishGame(false))
      dispatch(shuffleCards())
      setTimeout(() => {
         const {cards} = getState().game
         let flippedCard = cards.map((character) => ({ ...character, isFlipped: true, isMatched: false }))
         dispatch(setBoard(flippedCard))
         dispatch(setEnabledPlayer(true))
      },3000)
   }
}

export const setSelectedCardAction = (card:Card): AppThunk => {
   return async (dispatch, getState) => {
      const {cards, score} = getState().game
      let boardCopy = [...cards]
      boardCopy.splice(card.position ?? 0, 1, card)
      dispatch(setBoard(boardCopy))
   
      const flippedCards = boardCopy.filter((card) => card.isFlipped === false)
   
      if (flippedCards.length === 2) {
         dispatch(setEnabledPlayer(false))
         if (flippedCards[0].name === flippedCards[1].name) {
            const boardMatchedCards = boardCopy.map((card) => {
               if (!card.isFlipped) return { ...card, isMatched: true, isFlipped: true }
               return card
            })
            
            setTimeout(() => {
               dispatch(setBoard(boardMatchedCards))
               dispatch(setMoves())
               dispatch(setScore())
               dispatch(setEnabledPlayer(true))
            },1000)
            
            if (score === LIMIT_SCORE -1) {
               setTimeout(() => {
                  dispatch(setFinishGame(true))
               }, 2000)
            }
          
         } else {
            const boardMatchedCards = boardCopy.map((card) => {
               if (!card.isFlipped) return { ...card, isFlipped: true }
               return card
            })
            setTimeout(() => {
               dispatch(setBoard(boardMatchedCards))
               dispatch(setMoves())
               dispatch(setEnabledPlayer(true))
            },1000)
         }
      }
   }
}
