
import Data from '../../server/products/index.get.json'
export const getAllProducts = async(callback) => {
   
fetch("http://localhost:5005/products")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("API DATA",data);
    callback(data)

  })
  .catch((err) => console.log(err));

};
