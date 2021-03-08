
import './App.css';
// import { Container } from "semantic-ui-react";
// import Navbar from "./Components/Navbar";
import { Switch, Route } from "react-router-dom";
import RestaurantsApp from './RestaurantsApp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={RestaurantsApp} />
      </Switch>
      
    </div>
  );
}

export default App;
