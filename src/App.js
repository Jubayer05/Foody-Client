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
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import AddFoodItem from './components/Admin/AddFoodItem/AddFoodItem';
import Dashboard from './components/Admin/dashboard/Dashboard';
import OrderList from './components/Admin/OrderList/OrderList';
import CustomerList from './components/Admin/CustomerList/CustomerList';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Utilities/PrivateRoute/PrivateRoute';

export const FoodyContext = createContext();
function App() {
    const [foodCollection, setFoodCollection] = useState([]);
    const [user, setUser] = useState({});
  return (
    <FoodyContext.Provider 
        value={{Foody: [foodCollection, setFoodCollection], 
        FoodyUser: [user, setUser]}}>
    <Router>
      <Switch>
          {/* Routes For User */}
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/foodDetail/:id">
              <FoodDetail/>
          </Route>
          <Route path="/cart">
              <Cart />
          </Route>
          <Route path="/seeAllItem">
              <AllItem />
          </Route>

          {/* Private Route */}
          <PrivateRoute path="/shipment">
              <Shipment />
          </PrivateRoute>

          {/* Routes For Admin Only */}
          <Route path="/admin">
              <Admin />
          </Route>
          <Route path="/adminPage/dashboard">
              <Dashboard />
          </Route>
          <Route path="/adminPage/orderList">
              <OrderList />
          </Route>
          <Route path="/adminPage/customerList">
              <CustomerList />
          </Route>
          <Route path="/adminPage/addFoodItem">
              <AddFoodItem />
          </Route>
          <Route path="/adminPage/addAdmin">
              <AddAdmin />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
    </Router>
    </FoodyContext.Provider>
  );
}

export default App;
