import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {GameHeader} from '../../shared/components/game-header/game-header';
import {GamePage} from '../../pages/game-page/game-page';
import {CongratsPage} from '../../pages/congrats-page/congrats-page';

export const AppNavigation = () => {
   return (
      <BrowserRouter>
         <GameHeader/>
         <main>
            <Routes>
               <Route path='/' element={<GamePage/>} />
               <Route path='/congrats' element={<CongratsPage/>}/>
            </Routes>
         </main>
      </BrowserRouter>
   )
}
