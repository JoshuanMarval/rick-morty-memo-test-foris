import React from 'react';
import {fireEvent, render, RenderResult, screen, waitFor} from '@testing-library/react';
import {GamePage} from '../../pages/game-page/game-page';
import {BrowserRouter} from 'react-router-dom';
import {store} from '../../shared/store';
import {CARDS_MOCK} from '../../core/rick-and-morty.mock';
import {Provider} from 'react-redux';



describe('Test page <GamePage />', () => {
   let component: RenderResult
   
   beforeEach(() => {
      component = render(
         <BrowserRouter>
            <Provider store={store}>
               <GamePage/>
            </Provider>
         </BrowserRouter>
      )
   })

   it(' 1- should render GamePage correctly', () => {
      expect(component).toBeTruthy()
   });
   
   it(' 2- should render Loader before Board component is rendered correctly', async () => {
    
      await waitFor(() => {
         const loader = screen.queryAllByText('Iniciando juego...');
         expect(loader).toBeTruthy()
    
         const title = screen.queryAllByText('Personajes');
         expect(title).toBeTruthy()
         const cards = screen.getAllByAltText('character image');
         expect(cards.length).toEqual([...CARDS_MOCK, ...CARDS_MOCK].length)
         const playButton = screen.queryByRole('button')
         expect(playButton).toBeTruthy()
      })
   });
   
   it(' 3- should render Cards doubled in order correctly', async () => {
      await waitFor(() => {
         const title = screen.queryByText('Personajes');
         expect(title).toBeTruthy()
   
         const RickCard = screen.getAllByText('Rick Sanchez');
         const MortyCard = screen.getAllByText('Morty Smith');
         const SummerCard = screen.getAllByText('Summer Smith');
         const BethCard = screen.getAllByText('Beth Smith');
         const JerryCard = screen.getAllByText('Jerry Smith');
         const AbadangoCard = screen.getAllByText('Abadango Cluster Princess');
         
         expect(RickCard[0]).toEqual(RickCard[1])
         expect(MortyCard[2]).toEqual(MortyCard[3])
         expect(SummerCard[4]).toEqual(SummerCard[5])
         expect(BethCard[6]).toEqual(BethCard[7])
         expect(JerryCard[8]).toEqual(JerryCard[9])
         expect(AbadangoCard[10]).toEqual(AbadangoCard[11])
   
         const playButton = screen.getByRole('button')
         expect(playButton).toBeInTheDocument()
      })
   });
   

   it(' 4- should start Game after play button is pressed and render score header', async () => {
 
      await waitFor(() => {
         const playButton = screen.queryByRole('button')
         expect(playButton).toBeTruthy()
         
         fireEvent.click(screen.getByRole('button'))
         expect(playButton).not.toBeInTheDocument()
   
         const score = screen.getByText('Aciertos: 0');
         const moves = screen.getByText('Turnos: 0');
         expect(score).toBeInTheDocument()
         expect(moves).toBeInTheDocument()
   
         const RickCard = screen.getAllByText('Rick Sanchez');
         const MortyCard = screen.getAllByText('Morty Smith');
         const SummerCard = screen.getAllByText('Summer Smith');
         const BethCard = screen.getAllByText('Beth Smith');
         const JerryCard = screen.getAllByText('Jerry Smith');
         const AbadangoCard = screen.getAllByText('Abadango Cluster Princess');
         
         const cards = screen.getAllByLabelText('card')
         expect(cards).toHaveClass('false')
      })
    
   })
   
});
