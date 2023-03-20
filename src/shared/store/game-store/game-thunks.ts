import {AppThunk} from "../store-types";
import {Card} from "../../entities/card";
import {findAllCharacters} from '../../../pages/game-page/domain/usecases/find-all-characters';
import {resetGame, setBoard, setEnabledPlayer, setFinishGame, shuffleCards} from "./game-reducer";
import {setFlippedCardInBoard, setIfMatch, setIfNotMatch} from "./board-setters";

const LIMIT_SCORE = 6
let cardsRepository: Card[] = []

export const fetchCharactersAction = (): AppThunk => {
   return async (dispatch, getState) => {
      const {isGameFinished} = getState().game
      
      let doubledCards: Card[] = []
      dispatch(resetGame())
  
      if (cardsRepository.length > 0) {
         dispatch(setBoard(cardsRepository));
         if (isGameFinished === false) {
            dispatch(playGameAction())
         }
         return
      }
      
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
         let shuffledFlippedCards = cards.map((character) => ({ ...character, isFlipped: true, isMatched: false }))
         dispatch(setBoard(shuffledFlippedCards))
         dispatch(setEnabledPlayer(true))
      },3000)
   }
}

export const setSelectedCardAction = (card:Card): AppThunk => {
   return async (dispatch, getState) => {
      const {cards, score} = getState().game
      let boardCopy = [...cards]
      
      const flippedCards = setFlippedCardInBoard(boardCopy, card, dispatch)
   
      if (flippedCards.length === 2) {
         dispatch(setEnabledPlayer(false))
         if (flippedCards[0].name === flippedCards[1].name) {
            setIfMatch(boardCopy, flippedCards, dispatch)
            
            if (score === LIMIT_SCORE -1) {
               setTimeout(() => {
                  dispatch(setFinishGame(true))
               }, 2000)
            }
         } else {
            setIfNotMatch(boardCopy, flippedCards, dispatch)
         }
      }
   }
}
