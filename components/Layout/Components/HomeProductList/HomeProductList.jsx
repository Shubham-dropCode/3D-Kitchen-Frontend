import React from "react";
import useFetch from "../../../../context/productContext";

const HomeProductList = () => {

  const {data ,isLoading ,error} = useFetch(`/products?populate=*&[filter][categories][data][id]`)

  console.log(data);
  
  return (
    <section className="single_product_list pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="single_product_iner">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-sm-6">
                  <div className="single_product_img">
                    <img
                      src="https://images.unsplash.com/photo-1617198191416-f6e6b0de337f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      className="img-fluid"
                      alt="#"
                    />
                    <img
                      src="img/product_overlay.png"
                      alt="#"
                      className="product_overlay img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                  <div className="single_product_content">
                    <h5>Started from $10</h5>
                    <h2>
                  
                      <a href="single-product.html">
                        Printed memory foam brief modern throw pillow case
                      </a>
                    </h2>
                    <a href="product_list.html" className="btn_3">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="single_product_iner">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-sm-6">
                  <div className="single_product_img">
                    <img
                      src="https://images.unsplash.com/photo-1587093430416-0dc23a0c62c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      className="img-fluid"
                      alt="#"
                    />
                    <img
                      src="img/product_overlay.png"
                      alt="#"
                      className="product_overlay img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                  <div className="single_product_content">
                    <h5>Started from $10</h5>
                    <h2>
                      {" "}
                      <a href="single-product.html">
                        Printed memory foam brief modern throw pillow case
                      </a>{" "}
                    </h2>
                    <a href="product_list.html" className="btn_3">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="single_product_iner">
              <div className="row align-items-center justify-content-between">
                <div className="col-lg-6 col-sm-6">
                  <div className="single_product_img">
                    <img
                      src="https://images.unsplash.com/photo-1651096221486-926ee714eb8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      className="img-fluid"
                      alt="#"
                    />
                    <img
                      src="img/product_overlay.png"
                      alt="#"
                      className="product_overlay img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-sm-6">
                  <div className="single_product_content">
                    <h5>Started from $10</h5>
                    <h2>
                      {" "}
                      <a href="single-product.html">
                        Printed memory foam brief modern throw pillow case
                      </a>{" "}
                    </h2>
                    <a href="product_list.html" className="btn_3">
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeProductList;
