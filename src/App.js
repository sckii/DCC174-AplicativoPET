import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loja from './pages/Loja';
import Cesta from './pages/Cesta';
import Hospedagem from './pages/Hospedagem';
import Reserva from './pages/Reserva';

function App() {
  return (
    <BrowserRouter>
      <GeistProvider>
        <CssBaseline />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/loja' element={<Loja />} />
          <Route path='/cesta' element={<Cesta />} />
          <Route path='/hospedagem' element={<Hospedagem />} />
          <Route path='/reserva' element={<Reserva />} />
        </Routes>
      </GeistProvider>
    </BrowserRouter>
  );
}

export default App;
