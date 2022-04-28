import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import AuthSignIn from './routes/authentication/authentication.signin.component';
import AuthSignUp from './routes/authentication/authentication.signup.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<AuthSignIn />} />
        <Route path='signup' element={<AuthSignUp />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
