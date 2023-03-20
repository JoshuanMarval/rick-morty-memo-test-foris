import React from 'react';
import {render, RenderResult, screen, waitFor} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from '../../shared/store';
import {AppNavigation} from '../../shared/routes/index';

describe('Test page <Routes />', () => {
   let component: RenderResult
   
   beforeEach(() => {
      component = render(
         <Provider store={store}>
            <AppNavigation/>
         </Provider>
      )
   })
   
   it(' 1- should render Game Header correctly', async () => {
      
      const logo: HTMLImageElement =  screen.getByRole('img');
      await waitFor(() => expect(logo.src !== '').toBeTruthy());
      expect(logo.alt).toContain('game logo');
      
      const title = screen.getByText('Juego de memoria');
      expect(title).toBeTruthy();
   });
});
