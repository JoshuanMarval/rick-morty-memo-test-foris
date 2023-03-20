import { Character } from "./character"

export interface Card extends Character {
   position?: number
   isFlipped: boolean
   isMatched: boolean
}
