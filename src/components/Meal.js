const Meal = ({ meal }) => {
  const cutString = (nbWord, txt) => {
    if (txt.length > nbWord) {
      const newTxt = txt.split(" ").slice(0, nbWord).join(" ") + " ...";
      return newTxt;
    } else {
      return txt;
    }
  };

  return (
    <div className="meal row">
      <div className="meal__txt col-left column">
        <div className="meal__title">{meal.title}</div>
        <div className="meal__description">
          {cutString(9, meal.description)}{" "}
        </div>

        <div className="meal__details row">
          <div className="meal__details__price"> {meal.price}€ </div>

          {meal.popular === true ? (
            <div className="meal__details__pop row">
              {" "}
              <i className="icon-STAR_FILL"></i>
              <span>Populaire</span>
            </div>
          ) : null}
        </div>
      </div>
      {meal?.picture ? (
        <div className="row meal__picture">
          <img src={meal.picture} alt="" />
        </div>
      ) : null}
    </div>
  );
};

export default Meal;
