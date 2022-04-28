import { useContext,useEffect,useState } from 'react';

import ProductCard from '../../components/product-card/product-card.component';
import { useLocation } from 'react-router-dom';
import { ProductsContext } from '../../contexts/products.context';
import { HomeContext } from '../../contexts/home.context';
import Button from '../../components/button/button.component';

import * as ProductsUtils from '../../utils/products/products.utils'
import * as HomeUtils from '../../utils/home/home.utils'
import { Select, AsyncSelect, MultiSelect } from 'dropdown-select';
import 'dropdown-select/dist/css/dropdown-select.css';


import './shop.styles.scss';

const Shop = () => {
  
  const { products,setProducts } = useContext(ProductsContext);
  
  const [catID,setCatId]=useState("")
  const {categories,setCategories}=useContext(HomeContext)
  const [product,setNewProducts]=useState(products)
 
  useEffect(() => {
    console.log("UseEffect Called");
    if(products.length===0)
    {
      ProductsUtils.getAllProducts(setProducts);

    }
   setNewProducts(products)
  }, [products]);

  useEffect(() => {
    console.log("UseEffect Called");
    if (categories.length === 0) {
      HomeUtils.getAllCategories(setCategories);
    }
  }, []);
  const setFilterProducts=(id)=>{
    let filterData= products.filter(function(product){
      return id===product.category
    }).map((product)=>product)
    console.log("Filtered data",filterData)
    setNewProducts(filterData)
  }
  console.log("Products",catID)
  const handleChange = e => {
    setCatId(e.target.value)
    setFilterProducts(e.target.value)
    console.log("Data",e.target.value)
  }

  const retriveCatID=async(catid)=>{
    if(catID==="")
    {
      const id=await localStorage.getItem("categoryId");
      setCatId(id)
    }
    
    setCatId(catid)
    setFilterProducts(catid)
  }

  // useEffect(()=>{
  //   retriveCatID()
    
  // },[catID])
  
  return (
    <div className="products-container">
      <aside className="side-nav">
        <ul>
          {categories.map((data) => (
            <div  onClick={()=>retriveCatID(data.id)} key={data.id} style={(data.id===catID)?{backgroundColor:"pink"}:{backgroundColor:'white'}}>
              <a>{data.name}</a>
            </div>
          ))}
        </ul>
      </aside>
      <main className="products-menu">
        <div className='dropdown-select' >
          <select name="cars" id="cars" onChange={handleChange}>
            {categories.map((d)=>
            <option  value={d.id}>{d.name}</option>
            )}
          </select>
        </div>
        {product?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
     
      </main>
    </div>
  );
};

export default Shop;
