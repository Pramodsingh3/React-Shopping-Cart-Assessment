import { createContext, useState, useEffect } from 'react';
export const HomeContext = createContext({
    setBanners: () => {},
    setCategories: () => {},
    banners: [],
    categories:[]
  });


  export const HomeProvider = ({ children }) => {
    const [banners, setBanners] = useState([])
    const [categories,setCategories]=useState([])
    const value = { banners,setBanners,categories,setCategories};
    return (
      <HomeContext.Provider value={value}>
        {children}
      </HomeContext.Provider>
    );
  };