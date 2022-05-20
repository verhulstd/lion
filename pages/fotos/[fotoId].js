import Link from "next/link";
import axios from "axios";
const Detail = ({
  fotoDetail: {
    urls: { regular },
    user: { first_name, last_name },
  },
}) => {
  return (
    <>
      <h1>
        Picture by: {first_name} {last_name}
      </h1>
      <img src={regular} alt="" />
      <Link href="/fotos">
        <button>go back</button>
      </Link>
    </>
  );
};

export default Detail;

export async function getStaticPaths() {
  const {
    data: { results: lionPictures },
  } = await axios(
    "https://api.unsplash.com/search/photos/?query=lion&client_id=QnIQpUByA2Ei8NRVJDeHnkeSYRCqGHism1TXQCMzL7M"
  );
  return {
    paths: lionPictures.map(({ id: fotoId }) => ({ params: { fotoId } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx) {
  const id = ctx.params.fotoId;
  const { data: fotoDetail } = await axios(
    `https://api.unsplash.com/photos/${id}?client_id=QnIQpUByA2Ei8NRVJDeHnkeSYRCqGHism1TXQCMzL7M`
  );
  return {
    props: {
      fotoDetail,
    },
    revalidate: 60 * 60 * 24,
  };
}
