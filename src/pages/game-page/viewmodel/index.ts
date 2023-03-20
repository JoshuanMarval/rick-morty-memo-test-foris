import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/use-redux/use-redux-hooks';
import { fetchCharactersAction, playGameAction } from '../../../shared/store/game-store/game-thunks';
import {ROUTES} from '../../../core/const/const-routes';
import {useNavigate} from 'react-router-dom';



export const useGameViewModel = () => {
   
   const navigate = useNavigate()
   const dispatch = useAppDispatch()
   const {cards, isGameFinished} = useAppSelector(state => state.game)
   
   const redirectToCongratsPage = () => navigate(ROUTES.CONGRATS)

   
   useEffect(() => {
     if(!isGameFinished) dispatch(fetchCharactersAction())
      if(isGameFinished) redirectToCongratsPage()
   },[isGameFinished])
   
   const play = () => dispatch(playGameAction())
   
   return {
      isGameFinished,
      cards,
      play,
   }
}
