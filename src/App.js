import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import FoodDetail from './components/Food/FoodDetail/FoodDetail';
import Cart from './components/Food/Cart/Cart';
import Shipment from './components/Food/Shipment/Shipment';
import AllItem from './components/Food/AllItem/AllItem';
import Admin from './components/Admin/Admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/foodDetail/:id">
              <FoodDetail/>
          </Route>
          <Route path="/cart">
              <Cart />
          </Route>
          <Route path="/shipment">
              <Shipment />
          </Route>
          <Route path="/seeAllItem">
              <AllItem />
          </Route>
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
