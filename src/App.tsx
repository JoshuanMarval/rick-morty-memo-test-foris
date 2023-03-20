import React from 'react';
import { store } from './shared/store';
import {Provider} from 'react-redux';
import {AppNavigation} from '../src/shared/routes';
import '../src/shared/styles/index.scss'


function App() {

   return (
      <div>
         <Provider store={store}>
            <AppNavigation/>
         </Provider>
      </div>
   )
}

export default App
