import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import Nav from './components/nav';
import About from './components/about'
import Shop from './components/shop'
import ItemDetail from './components/itemdetail'



function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>    
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
