import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const products = useSelector((state) => state.cart.products);
  const cartIconStyle = {
    fontSize: '12px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: "#B08EAD",
    color: 'white',
    position: 'absolute',
    right: '-10px',
    top: '20px',
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'center'
  }
  return (
    <header className="main_menu home_menu">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand" href="/">
                <img src="Logo.png" alt="logo" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedConteFnt"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="menu_icon">
                  <i className="fas fa-bars" />
                </span>
              </button>
              <div
                className="collapse navbar-collapse main-menu-item"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/about">
                      about
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="/products"
                      id="navbarDropdown_1"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      product
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_1"
                    >
                      <Link className="dropdown-item" href="/products">
                        NEO PRO
                      </Link>
                      <Link className="dropdown-item" href="/products">
                        NEO SINK
                      </Link>
                      <Link className="dropdown-item" href="/products">
                        NEO FAUCETS
                      </Link>
                      <Link className="dropdown-item" href="/products">
                        NEO BATH
                      </Link>
                      <Link className="dropdown-item" href="/products">
                        NEO ACCESSORIES
                      </Link>
                    </div>
                  </li>
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_3"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >p
                      pages
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <a className="dropdown-item" href="login.html">
                        login
                      </a>
                      <a className="dropdown-item" href="checkout.html">
                        product checkout
                      </a>
                      <a className="dropdown-item" href="cart.html">
                        shopping cart
                      </a>
                      <a className="dropdown-item" href="confirmation.html">
                        confirmation
                      </a>
                      <a className="dropdown-item" href="elements.html">
                        elements
                      </a>
                    </div>
                  </li> */}
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="blog.html"
                      id="navbarDropdown_2"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      blog
                    </a>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown_2"
                    >
                      <a className="dropdown-item" href="blog.html">
                        {" "}
                        blog
                      </a>
                      <a className="dropdown-item" href="single-blog.html">
                        Single blog
                      </a>
                    </div>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" href="/contactus">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="hearer_icon d-flex align-items-center">
                {/* <a id="search_1" href="#">
                  <i className="ti-search" />
                </a> */}
                <Link href="/Cart">
                  <i className="flaticon-shopping-cart-black-shape" />
                  <span style={cartIconStyle}>{products.length}</span>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* <div className="search_input" id="search_input_box">
        <div className="container ">
          <form className="d-flex justify-content-between search-inner">
            <input
              type="text"
              className="form-control"
              id="search_input"
              placeholder="Search Here"
            />
            <button type="submit" className="btn" />
            <span className="ti-close" id="close_search" title="Close Search" />
          </form>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
