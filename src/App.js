import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loja from './pages/Loja';
import Cesta from './pages/Cesta';
import Hospedagem from './pages/Hospedagem';
import Reserva from './pages/Reserva';
import Servicos from './pages/Servicos/servicos';
import Chat from './pages/Servicos/chat';
import Cadastro from './pages/Cadastro/cadastro';
import Anfitriao from './pages/Cadastro/anfirtriao';
import Confirmacao from './pages/Cadastro/confiramacao';

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
          <Route path='/servicos' element={<Servicos />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/cadastro/anfitriao' element={<Anfitriao />} />
          <Route path='/cadastro/confirmacao' element={<Confirmacao />} />
        </Routes>
      </GeistProvider>
    </BrowserRouter>
  );
}

export default App;
