import Link from "next/link";
import React from "react";

const HomeBanner = () => {
  return (
    <section className="banner_part">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="banner_text">
              <div className="banner_text_iner">
                <h1>DESIGN YOUR WORLD</h1>
                <p>PREMIER KITCHEN APPLIANCES.</p>
                <Link href="/products" className="btn_1">
                  check now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner_img">
        <img src="https://images.unsplash.com/photo-1602028667128-a6cb1b40190d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="#" className="img-fluid" />
        <img
          src="img/banner_pattern.png "
          alt="#"
          className="pattern_img img-fluid"
        />
      </div>
    </section>
  );
};

export default HomeBanner;
