import { GeistProvider, CssBaseline } from '@geist-ui/core';

import Home from './pages/Home';

function App() {
  return (
    <GeistProvider>
      <CssBaseline />
      <Home />
    </GeistProvider>
  );
}

export default App;
