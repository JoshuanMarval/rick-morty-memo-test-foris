import React from 'react';
import {useAppSelector} from '../../../shared/hooks/use-redux/use-redux-hooks';
import styles from './board-header.module.scss'

export const BoardHeader = () => {
   
   const {cards, isGameFinished} = useAppSelector(state => state.game)
   
   return (
      <div className={styles.boardHeaderContainer}>
         {isGameFinished === false && <Scores/>}
         {(isGameFinished === undefined && cards.length > 0) && <p>Personajes</p>}
      </div>
   )
}

export const Scores = () => {
   const {score, moves} = useAppSelector(state => state.game)
   
   return (
      <div className={styles.boardHeaderScores}>
         <p>Aciertos: {score}</p>
         <p>Turnos: {moves}</p>
      </div>
   )
}
