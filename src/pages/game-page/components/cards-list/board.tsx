import React from "react"
import {CardItem} from '../../../../pages/game-page/components/cards-list/cardItem';
import { Card } from "../../../../shared/entities/card";
import styles from './card-list.module.scss'

type Props = { cards: Card[] }

export const Board = ({cards}:Props) => {

   return (
      <main className={styles.cardsList}>
         {cards.map((card, index) =>
            <CardItem key={index} card={card} />
         )}
      </main>
   )
}
