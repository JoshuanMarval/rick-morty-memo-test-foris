import { Action, ThunkAction } from '@reduxjs/toolkit';
import {store} from '../store/index';


export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   AppState,
   unknown,
   Action<string>
>;
