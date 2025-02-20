import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './Main';
import Restaurants from './pages/RestaurantsList'
import RestaurantsMenu from './pages/RestaurantsMenu'
import Cart from './pages/Cart'
import OrderConfirmation from './pages/OrderConfirmation'
import OrderTracking from './components/OrderTracking'
import AdminLogin from './pages/AdminLogin';
import AdminMenu from './pages/AdminMenu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/adminlogin' element={<AdminLogin></AdminLogin>}></Route>
          <Route path="restaurant/:id/menu" element={<AdminMenu></AdminMenu>}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Main></Main>}></Route>
          <Route path='/restaurants' element={<Restaurants></Restaurants>}></Route>
          <Route path='restaurants/:id/menu' element={<RestaurantsMenu></RestaurantsMenu>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='orderConfirmation' element={<OrderConfirmation></OrderConfirmation>}></Route>
          <Route path='trackyourorder' element={<OrderTracking></OrderTracking>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
