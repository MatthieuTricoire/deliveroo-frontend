import imgLogo from "../assets/img/header-image.jpg";

import Category from "./Category";
const Restaurant = ({ data, orders, setOrders }) => {
  return (
    <>
      <div className="restaurant-header row container">
        <div className="col-left">
          <div className="restaurant-header__title">
            <h2>{data.restaurant.name}</h2>
          </div>
          <div className="restaurant-header__description">
            <p>{data.restaurant.description}</p>
          </div>
        </div>
        <div className="col-right">
          <img src={imgLogo} alt="" className="restaurant-header__img" />
        </div>
      </div>
      <main>
        {data.categories.map((category, index) => {
          if (category.meals.length > 1) {
            return (
              <Category
                category={category}
                key={index}
                orders={orders}
                setOrders={setOrders}
              />
            );
          } else {
            return null;
          }
        })}
      </main>
    </>
  );
};

export default Restaurant;
