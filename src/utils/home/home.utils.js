export const getAllBanners = async(callback) => {
   
    fetch("http://localhost:5005/banners")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("API DATA",data);
        callback(data)
    
      })
      .catch((err) => console.log(err));
    
};


export const getAllCategories = async(callback) => {
   
    fetch("http://localhost:5005/categories")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("API DATA",data);
        callback(data)
    
      })
      .catch((err) => console.log(err));
    
};