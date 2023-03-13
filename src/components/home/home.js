import React, { useEffect, useState } from "react";
import Cocktail from "../affichage/cocktail/cocktail";
import "./home.css";

function Home() {
  //on  crée un tableau à vide pour stocker les données
  const [cocktailList, setCocktailList] = useState([]);
  //on récupère la valeur de l'input pour filtrer les résultats
  const [cocktailFilter, setCocktailFilter] = useState("");

  const searchCocktail = (e) => {
    setCocktailFilter(e.target.value);
  };
  //on récupère les données via l'api, grâce au filtre de l'input
  const getCocktail = async () => {
    let options = {
      method: "GET",
    };
    let response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailFilter}`,
      options
    );

    let data = await response.json();
    //on envoie les données qui nous intéressent dans le tableau au format json
    setCocktailList(data.drinks);
    //on vide l'input
    setCocktailFilter("");
  };
  //on recharge l'affichage chaque fois que la liste est modifiée

  const renderCocktailList = () => {
    return cocktailList.map((item, index) => {
      return (
        <Cocktail
          key={index}
          name={item.strDrink}
          image={item.strDrinkThumb}
          ingredient1={item.strIngredient1}
          ingredient2={item.strIngredient2}
          ingredient3={item.strIngredient3}
          ingredient4={item.strIngredient4}
          ingredient5={item.strIngredient5}
          ingredient6={item.strIngredient6}
          ingredient7={item.strIngredient7}
          instructions={item.strInstructions}
        />
      );
    });
  };
  useEffect(() => {
    console.log("Liste des cocktails", cocktailList);
  }, [cocktailList]);
  return (
    <div>
      <div className="mainBanner">
        <h1 className="mainTitle">Cocktail Factory</h1>
        <h3>
          <i>Les meilleurs cocktails, en direct de votre canapé ! </i>
        </h3>
        <input
          id="cocktailField"
          value={cocktailFilter}
          type="text"
          onChange={searchCocktail}
          placeholder="My dream cocktail"
        />
        <button onClick={getCocktail}>Chercher</button>
      </div>
      {renderCocktailList()}
    </div>
  );
}

export default Home;
