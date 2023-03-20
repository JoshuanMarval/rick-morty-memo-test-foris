import {Dispatch} from '@reduxjs/toolkit';
import {Card} from '../../../shared/entities/card';
import {setBoard, setEnabledPlayer, setMoves, setScore} from '../../store/game-store/game-reducer';

export const setFlippedCardInBoard = (board: Card[], flippedCard: Card, dispatch: Dispatch): Card[] => {
   board.splice(flippedCard.position ?? 0, 1, flippedCard)
   dispatch(setBoard(board))
   
   return board.filter((card) => !card.isFlipped);
}

export const setIfMatch = (board: Card[], flippedCards: Card[], dispatch: Dispatch) => {
   const boardMatchedCards = board.map((card) => {
      if (!card.isFlipped) return { ...card, isMatched: true, isFlipped: true }
      return card
   })
   
   setTimeout(() => {
      dispatch(setBoard(boardMatchedCards))
      dispatch(setMoves())
      dispatch(setScore())
      dispatch(setEnabledPlayer(true))
   },1000)
}

export const setIfNotMatch = (board: Card[], flippedCards: Card[], dispatch: Dispatch) => {
   const noMatchedCards = board.map((card) => {
      if (!card.isFlipped) return { ...card, isFlipped: true }
      return card
   })
   setTimeout(() => {
      dispatch(setBoard(noMatchedCards))
      dispatch(setMoves())
      dispatch(setEnabledPlayer(true))
   },1000)
}
