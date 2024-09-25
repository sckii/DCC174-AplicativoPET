import { GeistProvider, CssBaseline } from '@geist-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loja from './pages/Loja';

function App() {
  return (
    <BrowserRouter>
      <GeistProvider>
        <CssBaseline />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/loja' element={<Loja />} />
        </Routes>
      </GeistProvider>
    </BrowserRouter>
  );
}

export default App;
