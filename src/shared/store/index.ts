import {configureStore} from '@reduxjs/toolkit';
import gameReducer from './game-store/game-reducer';


export const store = configureStore({
   reducer: {
      game: gameReducer
   }
});
