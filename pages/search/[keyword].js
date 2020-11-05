import { useRouter } from "next/router";

import Meta from "../../components/Meta";
import Layout from "../../components/Layout";
import Breadcumb from "../../components/Breadcumb";
import MovieGrid from "../../components/MovieGrid";

function SearchKeyword() {
  let router = useRouter();
  console.log(router);
  const { keyword } = router.query;
  return (
    <Layout>
      <Meta title={`Cari ${keyword} - Cinema22`} description="Best movie database for you." />
      <br />
      <Breadcumb
        items={[
          {
            icon: "fa-search",
            text: keyword,
            path: router.asPath,
          },
        ]}
      />
      <br />
      <MovieGrid
        url={`https://api.themoviedb.org/4/search/movie?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_KEY}&query=${keyword}`}
      />
    </Layout>
  );
}

export default SearchKeyword;
