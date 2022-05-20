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

export const getStaticPaths = async () => {
  const {
    data: { drinks: cocktails },
  } = await axios(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
  );
  return {
    paths: cocktails.map(({ idDrink }) => ({ params: { idDrink } })),
    // paths: [
    //   { params: { idDrink: "12560" } },
    //   { params: { idDrink: "12562" } },
    //   { params: { idDrink: "12862" } },
    // ],
    //toekomstige data ook mee opnemen
    fallback: "blocking",
  };
};

export const getStaticProps = async (ctx) => {
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
      revalidate: 1,
    },
  };
};
