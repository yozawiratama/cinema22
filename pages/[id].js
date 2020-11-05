import { useRouter } from "next/router";

import Meta from "../components/Meta";
import Layout from "../components/Layout";
import Breadcumb from "../components/Breadcumb";

const Detail = ({ movie }) => {
  let router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Meta title={`${movie.title} - Cinema22`} description={movie.overview} />
      <Breadcumb
        items={[
          {
            path: router.asPath,
            text: movie.title,
            icon: "fa-ticket",
          },
        ]}
      />
      <div className="columns">
        <div className="column is-two-fifths">
          <figure class="image">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          </figure>
        </div>
        <div className="column">
          <h4 className="title">{movie.original_title}</h4>
          <hr />
          <div className="tags">
            <span className="tag">
              <span className="icon">
                <i className="fa fa-thumbs-up"></i>
              </span>
              <span>{movie.vote_count}</span>
            </span>
            <span className="tag">
              <span className="icon">
                <i className="fa fa-star"></i>
              </span>
              <span>{movie.vote_average}</span>
            </span>
          </div>
          <p>{movie.overview}</p>
          <table className="table mt-5">
            <tr>
              <td>Genre</td>
              <td>
                <div className="tags">
                  {movie.genres.map((genre, genreIndex) => (
                    <span key={genreIndex} className="tag is-success">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
            <tr>
              <td>Languages</td>
              <td>
                {movie.spoken_languages.map((genre) => genre.name).join(", ")}
              </td>
            </tr>
            <tr>
              <td>Year of Release</td>
              <td>{movie.release_date.split("-")[0]}</td>
            </tr>
            <tr>
              <td>Production Countries</td>
              <td>
                {movie.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </td>
            </tr>
            <tr>
              <td>Production Companies</td>
              <td>
                {movie.production_companies
                  .map((company) => company.name)
                  .join(", ")}
              </td>
            </tr>
            <tr>
              <td>Source</td>
              <td>
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                  className="button is-link is-small"
                >
                  IMDB
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <br />
      <br />
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIEDB_KEY}`
  );
  const movie = await res.json();
  return {
    props: {
      movie,
    },
  };
}

export default Detail;
