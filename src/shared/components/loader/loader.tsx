import React from "react"
import styles from './loader.module.scss'

export const Loader = () => {
   return (
      <div className={styles.container}>
         <div className={styles.ldsDualRing}></div>
         Iniciando juego...
      </div>
   )
}
