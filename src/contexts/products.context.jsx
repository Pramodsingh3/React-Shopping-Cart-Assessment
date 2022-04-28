import { createContext, useState } from 'react';

import PRODUCTS from '../shop-data.json';
import Data from '../server/products/index.get.json'

export const ProductsContext = createContext({
  products: [],
  setProducts:()=>{}
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const value = { products ,setProducts};
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
