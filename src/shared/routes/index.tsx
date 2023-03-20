import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {GameHeader} from '../../shared/components/game-header/game-header';
import {GamePage} from '../../pages/game-page/game-page';
import {CongratsPage} from '../../pages/congrats-page/congrats-page';
import {useAppSelector} from '../../shared/hooks/use-redux/use-redux-hooks';


export const AppNavigation = () => {
   
   const {isGameFinished} = useAppSelector(state => state.game)
   
   return (
      <BrowserRouter>
         <GameHeader/>
         <main>
            <Routes>
               <Route path='/' element={<GamePage/>} />
               <Route path='/congrats' element={
                  <ProtectedRoute isProtected={!isGameFinished} redirectTo='/'>
                     <CongratsPage/>
                  </ProtectedRoute>
               }/>
            </Routes>
         </main>
      </BrowserRouter>
   )
}

type Props = { isProtected: boolean, redirectTo: string, children: JSX.Element }

const ProtectedRoute = ({isProtected, redirectTo, children}:Props) => {
   if(isProtected) return <Navigate to={redirectTo} replace />
   return children
}
