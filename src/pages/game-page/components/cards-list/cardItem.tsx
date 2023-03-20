import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../../shared/hooks/use-redux/use-redux-hooks';
import {setSelectedCardAction} from '../../../../shared/store/game-store/game-thunks';
import { Card } from '../../../../shared/entities/card';
import back from '../../../../shared/assets/back.png'
import styles from './card-list.module.scss'

type Props = {
   card: Card
}

export const CardItem = ({card}: Props) => {
   
   const dispatch = useAppDispatch()
   const {isPlayerEnabled} = useAppSelector(state => state.game)

   const handleClick = (card:Card) => {
      const showedCard = { ...card, isFlipped: false }
      dispatch(setSelectedCardAction(showedCard))
   }

   
   return (
      <section aria-label={`card`} className={`${styles.cardContainer} ${ card.isFlipped && styles.cardContainerFlip }
      ${card.isMatched && styles.cardMatched} ${isPlayerEnabled && styles.cardPointer}`}
               onClick={() => isPlayerEnabled && handleClick(card)}>
         <div className={styles.card}>
             <div className={styles.cardFront}>
                <img className={styles.cardImage} src={card.image} alt='character image' />
                <h4 className={styles.cardName}>{card.name}</h4>
                <div className={styles.cardDesc}>
                   <p>{card.species}</p>-
                   <p>{card.status}</p>
                </div>
             </div>
            <div className={styles.cardBack}>
               <img className={styles.cardImage} src={back} alt='back card image'/>
            </div>
         </div>
      </section>
   )
}
