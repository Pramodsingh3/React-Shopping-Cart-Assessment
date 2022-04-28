import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
import { HomeProvider } from './contexts/home.context';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      
        <HomeProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
        </HomeProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
