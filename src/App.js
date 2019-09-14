import React from 'react';
import Header from './Components/Header';
import CategoriasProvider from './context/CategoriasContext';
import Formulaio from './Components/Formulaio';
import EventosProvider from './context/EventosContext';
import ListaEventos from './Components/ListaEventos';

function App() {
  return (
    <EventosProvider>
    <CategoriasProvider>
      <Header />
      <div className="uk-container">
          <Formulaio />
          <ListaEventos/>
      </div>
    </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
