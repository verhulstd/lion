import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
const Detail = () => {
  const {
    query: { idDrink },
  } = useRouter();
  const [cocktail, setCocktail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const {
          data: { drinks },
        } = await axios(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
        );
        setCocktail(drinks[0]);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, [idDrink]);

  return (
    <main>
      <h1>Cocktail detail</h1>
      {cocktail.strDrink && (
        <>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt="" />
          <p>{cocktail.strInstructions}</p>
        </>
      )}
    </main>
  );
};

export default Detail;
