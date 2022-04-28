import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import * as ProductsUtils from "../../utils/products/products.utils";
import * as HomeUtils from "../../utils/home/home.utils";
import Directory from "../../components/directory/directory.component";
import "./home.component.scss";
import offer1 from "../../assets/images/offers/offer1.jpg";
import offer2 from "../../assets/images/offers/offer2.jpg";
import offer3 from "../../assets/images/offers/offer3.jpg";
import offer4 from "../../assets/images/offers/offer4.jpg";
import offer5 from "../../assets/images/offers/offer5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import { ProductsContext } from "../../contexts/products.context";
import { HomeContext } from "../../contexts/home.context";
const Home = () => {

  
  const { banners, setBanners, categories, setCategories } =
    useContext(HomeContext);

  const {  setProducts } = useContext(ProductsContext);

  useEffect(() => {
    console.log("UseEffect Called");
    ProductsUtils.getAllProducts(setProducts);
  }, []);

  useEffect(() => {
    console.log("UseEffect Called");
    if (banners.length === 0) {
      HomeUtils.getAllBanners(setBanners);
    }
  }, [banners]);

  useEffect(() => {
    console.log("UseEffect Called");
    if (categories.length === 0) {
      HomeUtils.getAllCategories(setCategories);
    }
  }, [categories]);
  // const categories = [
  //   {
  //     id: 1,
  //     title: 'Fruits & Vegetables',
  //     subtitle:'A veriety of fresh fruits and vegetables',
  //     imageUrl: fruitesImage
  //   },
  //   {
  //     id: 2,
  //     title: 'Bakery Cakes and Dairy',
  //     subtitle:'The best cupcakes, cookies, pies, cheesecakes, fresh bread, biscotti ,muffins,bagels,fresh coffee,milk and more',
  //     imageUrl: babyImage,
  //   },
  //   {
  //     id: 3,
  //     title: 'Bevarages',
  //     subtitle:'Our bevarages department will ensure your fridge is always fully stocked. Shop for soda ,juice, beer and more.',
  //     imageUrl: bevaragesImage
  //  },
  //  {
  //     id: 4,
  //     title: 'Beauty and Hygiene',
  //     subtitle:'Buy beauty and personal care products online in india at best prices',
  //     imageUrl: beautyImage
  //   },
  //   {
  //     id: 5,
  //     title: 'Baby Care',
  //     subtitle:'Shop online for Baby Products,Diapers,Skin Care Products etc',
  //     imageUrl: babyImage
  //   },
  // ];

  const images = [
    { url: offer1 },
    { url: offer2 },
    { url: offer3 },
    { url: offer4 },
    { url: offer5 },
  ];

  if (banners.length == 0) {
    return <div style={{ textAlign: "center" }}>Loading Data wait</div>;
  }

  return (
    <div className="homeContainer">
      <Carousel autoPlay={true}>
        {banners?.map((d) => (
          <div key={d.id}>
            <img
              src={require("../../serverImg" + d.bannerImageUrl)}
              height={"100%"}
              width={"100%"}
              alt={d.bannerImageUrl}
            />
          </div>
        ))}
      </Carousel>

      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
