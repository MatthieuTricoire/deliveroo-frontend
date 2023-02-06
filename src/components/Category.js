import Meal from "./Meal";

const Category = ({ category }) => {
  return (
    <div className="background">
      <section className="category container">
        <h2 className="category__title">{category.name}</h2>
        <div className="meals row col-left">
          {category.meals.map((meal) => {
            return <Meal meal={meal} key={meal.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Category;
