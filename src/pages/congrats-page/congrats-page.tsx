import React from "react"
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../../src/shared/hooks/use-redux/use-redux-hooks';
import {setFinishGame} from '../../shared/store/game-store/game-reducer';
import styles from './congrats-page.module.scss'

export const CongratsPage = () => {
   
   const dispatch = useAppDispatch()
   const {moves} = useAppSelector(state => state.game)
   
   const playAgain = () => {
      dispatch(setFinishGame(false))
   }
   
   const goToHome = () => {
      dispatch(setFinishGame(undefined))
   }
   
   return (
      <div className={`game-container ${styles.container}`}>
         <div className={styles.containerResults}>
            <h3 className={styles.containerResultsCongrats}>¡Felicitaciones!</h3>
            <p>Terminaste el juego con {moves} turnos</p>
            <div className={styles.containerResultsButtons}>
               <Link to='/'>
                  <button className='accept-button' onClick={playAgain}>Repetir</button>
               </Link>
               <Link to='/'>
                  <button className='accept-button accept-button-variant' onClick={goToHome}>Inicio</button>
               </Link>
            </div>
         </div>
      </div>
   )
}
