import React from 'react';
import { Board  } from './components/cards-list/board';
import { BoardHeader } from '../../shared/components/board-header.module.scss/board-header';
import { Loader } from '../../shared/components/loader/loader';
import { useGameViewModel } from '../../pages/game-page/viewmodel';
import styles from './game-page.module.scss'

export const GamePage = () => {
   
   const {isGameFinished, cards, play} = useGameViewModel()
   
   return (
      <div className='game-container'>
         <BoardHeader/>
         {cards.length > 0 ? <Board cards={cards} /> : <Loader/>}
         <div className={styles.ButtonContainer}>
            {cards.length > 0 && isGameFinished === undefined
               && <button className='accept-button' onClick={play}>Jugar</button>}
         </div>
      </div>
   )
}
