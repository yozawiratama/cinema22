import Link from "next/link";

import GetFlagUrlByLanguage from "../helpers/FlagUrl";

const GridItem = ({
  id,
  title,
  imageUrl,
  releaseDate,
  rating,
  lang,
  isAdult,
}) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-square">
          <img
            src={`https://image.tmdb.org/t/p/w500/${imageUrl}`}
            alt={title}
          />
        </figure>
        <img
          src={GetFlagUrlByLanguage(lang, 24)}
          style={{
            position: "absolute",
            top: "10px",
            float: "right",
            right: "10px",
          }}
        />
        <span
          className="tag is-dark"
          style={{ position: "absolute", top: "10px", left: "10px" }}
        >
          {releaseDate.split("-")[0]}
        </span>
      </div>
      <div
        className="card-content"
        style={{ minHeight: "105px", padding: "1rem 1rem 0 1rem" }}
      >
        <div className="content">
          <div className="media" style={{ margin: 0 }}>
            <div className="media-content">
              <p className="title is-5">
                <Link href={`/${id}`}>
                  <a>{title}</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="card-footer">
        <p className="card-footer-item">
          <span className="icon">
            <i className="fa fa-star" />
          </span>
          <span>{rating}</span>
        </p>
        <p className="card-footer-item">{isAdult ? "17+" : "SU"}</p>
        <Link href={`/${id}`}>
          <a className="card-footer-item">
            <span className="icon">
              <i className="fa fa-arrow-right" />
            </span>
          </a>
        </Link>
      </footer>
    </div>
  );
};

export default GridItem;
