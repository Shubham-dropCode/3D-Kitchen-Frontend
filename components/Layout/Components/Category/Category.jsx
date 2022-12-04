import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useFetch from "../../../../context/productContext";

const Category = () => {
  const router = useRouter();
  const { data } = useFetch("/categories?populate=*");

  console.log(data);
  return (
    <section>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_tittle text-center">
              <h2>Product Category</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {data?.map((cateItem) => {
            return (
              <div key={cateItem.id} className="col-md-6 col-sm-6">
                <div className="product-grid">
                  <Link
                    href={{
                      pathname: "/products",
                      query: {
                        id: cateItem.id,
                      },
                    }}
                  >
                    <div className="product-image">
                      <img
                        className="img-1"
                        src={
                          process.env.NEXT_PUBLIC_UPLOAD_URL +
                          cateItem.attributes.Categories_Image.data.attributes
                            .url
                        }
                      />

                      <button className="product-links genric-btn primary-border small">
                        View Products
                      </button>
                    </div>
                    <div className="product-content">
                      <h className="title">
                        <a href="#">{cateItem.attributes.Categorie_Name}</a>
                      </h>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}

          {/* <div className="col-md-6 col-sm-6">
            <div className="product-grid">
              <div className="product-image">
                <Link
                href="" className="image">
                  <img
                    className="img-1"
                    src="https://m.media-amazon.com/images/I/81n4+gmz+6L._UX569_.jpg"
                  />
                </Link>
                <button className="product-links genric-btn primary-border small">Watch</button>
              </div>
              <div className="product-content">
                <div className="price">
                  $61.99 <span>$79.11</span>
                </div>
                <h3 className="title">
                  <a href="#">Women's Top</a>
                </h3>
                <ul className="rating">
                  <li className="fas fa-star" />
                  <li className="fas fa-star" />
                  <li className="fas fa-star" />
                  <li className="fas fa-star" />
                  <li className="far fa-star" />
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Category;
