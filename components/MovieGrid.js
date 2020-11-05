import React, { useState } from "react";
import useSWR from "swr";

import GridItem from "./GridItem";
import Pagination from "./Pagination";

const MovieGrid = ({ url }) => {
  const [page, setPage] = useState(1);
  const fetcher = (url) => fetch(url).then((r) => r.json());

  const { data, error } = useSWR(`${url}&page=${page}`, fetcher, { refreshInterval: 5000 });

  if (error)
    return (
      <div class="notification is-danger">
        <strong>Ooops!</strong> Terjadi kesalahan dalam menyediakan data.
        Silahkan refresh.
        <br />
        <strong>Automatic refresh in 5s</strong>
      </div>
    );

  return (
    <>
      {data ? (
        <>
          <p className="mb-3">Showing {page} to 10 of {data.total_results} results</p>
          <div className="columns is-multiline">
            {data.results.map((movie, movieIndex) => (
              <div key={movieIndex} className="column is-one-fifth">
                <GridItem
                  id={movie.id}
                  title={movie.title}
                  imageUrl={movie.poster_path}
                  releaseDate={movie.release_date}
                  rating={movie.vote_average}
                  lang={movie.original_language}
                  isAdult={movie.adult}
                />
              </div>
            ))}
          </div>
          <br />
          <Pagination
            current={data.page}
            total={data.total_pages}
            totalResult={data.total_results}
            onPageChange={setPage}
          />
          <br />
          <br />
        </>
      ) : (
        <pre className="mb-5">
          <h1 className="title has-text-centered">Loading your data</h1>
        </pre>
      )}
    </>
  );
};

export default MovieGrid;
