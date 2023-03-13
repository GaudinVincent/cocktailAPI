import "./cocktail.css";
function Cocktail(props) {
  return (
    <div className="cocktailDescription">
      <h2 className="cocktailName">{props.name} </h2>
      <img src={props.image} alt="Un cocktail" />
      <h4>Ingrédients</h4>
      <div className="ingredientList">
        <p>{props.ingredient1}</p>
        <p>{props.ingredient2}</p>
        <p>{props.ingredient3}</p>
        {props.ingredient4 !== null ? <p>{props.ingredient4}</p> : null}
        {props.ingredient5 !== null ? <p>{props.ingredient5}</p> : null}
        {props.ingredient6 !== null ? <p>{props.ingredient6}</p> : null}
        {props.ingredient7 !== null ? <p>{props.ingredient7}</p> : null}
      </div>
      <h4>Préparation</h4>

      <p className="cocktailRecipe">
        <i>{props.instructions}</i>{" "}
      </p>
    </div>
  );
}

export default Cocktail;
