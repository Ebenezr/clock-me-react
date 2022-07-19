import React from 'react';
import Aside from './components/aside/Aside';
import Main from './components/main/Main';
import Info from './components/main/Info';

import './components/scss/style.scss';

function App() {
  return (
    <main className="App">
    
    <Aside />
    <Main />
    <Info />
    </main>
  );
}

export default App;
