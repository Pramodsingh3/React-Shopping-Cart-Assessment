import './category-item.styles.scss';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
const CategoryItem = ({ category ,gotoShop}) => {

  const navigate =useNavigate()
  const { imageUrl, name,description,id } = category;

  const goToProducts= (id) => {
    navigate('/shop', { state: { id: id, color: 'green' } })
  };
  console.log("ITEM",category)
  return (
    <div className='category-container'>
      <div
        className='background-image'
        
      >
        {imageUrl?
        <img src={require("../../serverImg"+imageUrl)} height="100%" width="100%" alt="hello" />
        :null}
        </div>
      <div className='category-body-container'>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button onClick={()=>goToProducts(id)}>{`Explore ${name}`}</Button>
      </div>
    </div>
  );
};

export default CategoryItem;
