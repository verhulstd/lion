import axios from "axios";
const Detail = ({ cocktail: { strDrink, strDrinkThumb, strInstructions } }) => {
  return (
    <main>
      <h1>Cocktail detail</h1>
      {strDrink && (
        <>
          <h2>{strDrink}</h2>
          <img src={strDrinkThumb} alt={strDrink} />
          <p>{strInstructions}</p>
        </>
      )}
    </main>
  );
};

export default Detail;

export const getServerSideProps = async (ctx) => {
  const {
    params: { idDrink },
  } = ctx;
  const {
    data: { drinks },
  } = await axios(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`
  );

  return {
    props: {
      cocktail: drinks[0],
    },
  };
};
