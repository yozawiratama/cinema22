import Meta from "../components/Meta";
import Layout from "../components/Layout";
import Breadcumb from "../components/Breadcumb";
import MovieGrid from "../components/MovieGrid";

function Home() {
  return (
    <Layout>
      <Meta title="Cinema22"  description="Best movie database for you." />
      <br />
      <Breadcumb items={[]} />
      <br />
      <MovieGrid url={`https://api.themoviedb.org/4/discover/movie?api_key=${process.env.NEXT_PUBLIC_MOVIEDB_KEY}`} />
    </Layout>
  );
}

export default Home;
