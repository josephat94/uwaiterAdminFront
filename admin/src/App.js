import React from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutContainer from './containers/layout/layout';
import MenuAdmin from './components/menu-admin/menu-admin';
import LayoutState from './contexts/layout/layout.state';

function App() {
  return (
    <div className="App">
      <LayoutState>
        <LayoutContainer>
        </LayoutContainer>
      </LayoutState>
    </div>
  );
}

export default App;
