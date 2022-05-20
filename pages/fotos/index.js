import axios from "axios";
import Link from "next/link";
const index = ({ lionPictures }) => {
  return (
    <>
      <h1>Unsplash Lion Pictures</h1>
      <section className="lionGrid">
        {lionPictures.map(({ alt_description, id, urls: { thumb } }) => (
          <article key={id}>
            <Link href={`/fotos/${id}`}>
              <a>
                <img src={thumb} alt={alt_description} />
                <p>{alt_description}</p>
              </a>
            </Link>
          </article>
        ))}
      </section>
    </>
  );
};

export default index;

export async function getStaticProps() {
  const {
    data: { results: lionPictures },
  } = await axios(
    "https://api.unsplash.com/search/photos/?query=lion&client_id=QnIQpUByA2Ei8NRVJDeHnkeSYRCqGHism1TXQCMzL7M"
  );
  return {
    props: {
      lionPictures,
    },
    revalidate: 60 * 60 * 24,
  };
}

//https://api.unsplash.com/search/photos/?query=lion&client_id=QnIQpUByA2Ei8NRVJDeHnkeSYRCqGHism1TXQCMzL7M
