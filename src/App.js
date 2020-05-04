import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import TabsPage from './components/TabsPage/TabsPage';

import {
  Switch,
  NavLink,
  Route,
} from 'react-router-dom';

function App() {
  return (
  <div>
    <h1>Tabs with router</h1>

    <nav className="nav-list">
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/tabs">Tabs</NavLink></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/tabs/:tabsId?" component={TabsPage}/>
    </Switch>

  </div>
  );
}

export default App;
