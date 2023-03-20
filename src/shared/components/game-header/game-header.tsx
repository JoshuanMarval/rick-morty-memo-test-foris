import React from 'react';
import logo from '../../../shared/assets/logo.png'
import styles from './game-header.module.scss'

export const GameHeader = () => {
  return (
     <header>
        <img  className={styles.logo} src={logo} alt='game logo' />
        <p className={styles.memoGame}>Juego de memoria</p>
     </header>
  )
}
