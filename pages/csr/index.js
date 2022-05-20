import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
const Index = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await axios(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
        );
        setCocktails(data.drinks);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    })();
  }, []);
  return (
    <main>
      <h1>CSR masterpage (oplijsting van cocktails (useEffect))</h1>
      {error && <p>error !!</p>}
      {loading && <p>loading...</p>}
      {cocktails && (
        <section className="cocktailgrid">
          {cocktails.map(({ strDrink, idDrink, strDrinkThumb }) => (
            <Link key={idDrink} href={`csr/cocktail/${idDrink}`}>
              <article>
                <a>
                  <img src={strDrinkThumb} alt={strDrink} />
                  <p>{strDrink}</p>
                </a>
              </article>
            </Link>
          ))}
        </section>
      )}
    </main>
  );
};

export default Index;
