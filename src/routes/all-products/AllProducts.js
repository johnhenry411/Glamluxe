import React, { useEffect, useState } from "react";
import Product from "./Product.js";
import CategoryAllHero from '../../assets/images/product-listing-images/all_images.jpg'
import CategoryDuvetsHero from '../../assets/images/product-listing-images/Duvets-category.jpg'
import CategoryCarpetsHero from '../../assets/images/product-listing-images/Carpets-category.jpg'
import CategoryCutleryHero from '../../assets/images/product-listing-images/Cutlery-category.jpg'
import CategoryShoesHero from '../../assets/images/product-listing-images/category-jeans-hero.mp4'
import "./all-products.css";


const AllProducts = ({ allProducts,
  activeCategory,
  selectedCurrency,
  handleAddProduct,
  alertMessageMain,
  productId }) => {

  const [quickAddToCartVisible, setQuickAddToCartVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    document.title = `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} | Shopping Time`;
  }, [activeCategory]);

  const toggleQuickCart = () => {
    setQuickAddToCartVisible(!quickAddToCartVisible);
  }
  const removeQuickAddToCart = () => {
    setQuickAddToCartVisible(false);
  };

  return (
    <article>
      <article className="products-hero">
        <h2>{activeCategory === 'all Products' ? "Bringing the luxury to your doorstep!" : activeCategory === 'duvets' ? "Let's create your own style" : activeCategory === 'carpets' ? "The joy of dressing" : activeCategory === 'cutlery' ? "Unlock your style" : activeCategory === 'shoes' ? "Fashion never sleeps" : "Boost your style sense!"}</h2>
        <img src={activeCategory === 'all' ? CategoryAllHero : activeCategory === 'duvets' ? CategoryDuvetsHero : activeCategory === 'carpets' ? CategoryCarpetsHero : activeCategory === 'cutlery' ? CategoryCutleryHero : activeCategory === 'jeans' ? CategoryShoesHero : CategoryAllHero} alt={`${activeCategory} Hero`} />
      </article>
      <article className="product-listing-page">
        <h3 className="active-category">{activeCategory}</h3>
        <section className="store-products">
          {allProducts
            ? allProducts.map((item) => (
              <Product
                key={item.id}
                item={item}
                productId={productId}
                selectedCurrency={selectedCurrency}
                handleAddProduct={handleAddProduct}
                alertMessageMain={alertMessageMain}
                toggleQuickCart={toggleQuickCart}
                quickAddToCartVisible={quickAddToCartVisible}
                removeQuickAddToCart={removeQuickAddToCart}
                activeCategory={activeCategory}
                setQuickAddToCartVisible={setQuickAddToCartVisible}
                setActiveItem={setActiveItem}
                activeItem={activeItem}
              />
            ))
            : "Loading..."}
        </section>
      </article>
    </article>
  );
}


export default AllProducts;