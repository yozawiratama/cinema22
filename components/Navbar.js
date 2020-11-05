import React, { useState } from "react";
import Link from "next/link";
import Router from 'next/router'


const Navbar = () => {
  const [isActive, toggleActive] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
        Router.push(`/search/${searchKeyword}`);
    }
  };

  return (
    <nav
      className="navbar is-spaced has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src="/cinema22.png" height="28" />
        </a>

        <a
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => {
            toggleActive(!isActive);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={isActive ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-start">
          <Link href="/">
            <a className="navbar-item">
              <span className="icon has-text-primary">
                <i className="fa fa-home"></i>
              </span>
              <span>Home</span>
            </a>
          </Link>

          <Link href="/about">
            <a className="navbar-item">
              <span className="icon has-text-warning">
                <i className="fa fa-file-text"></i>
              </span>
              <span>About</span>
            </a>
          </Link>

          <Link href="/love">
            <a className="navbar-item">
              <span className="icon has-text-danger">
                <i className="fa fa-heart"></i>
              </span>
              <span>Love</span>
            </a>
          </Link>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Find a movie"
                  value={searchKeyword}
                  onChange={({ target }) => setSearchKeyword(target.value)}
                  onKeyPress={handleKeyPress}
                />
              </div>
              <div className="control">
                <Link href={`/search/${searchKeyword}`}>
                  <a className="button is-info">
                    <span className="icon">
                      <i className="fa fa-search" />
                    </span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
