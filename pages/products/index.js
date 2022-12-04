import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Breadcrumb from "../../components/Layout/Components/Breadcrumb/Breadcrumb";
import ProductList from "../../components/Layout/Components/ProductList/ProductList";
import useFetch, { useProductContext } from "../../context/productContext";

const products = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectSubCat, setSelectSubCat] = useState([]);

  
  const { data } = useFetch(
    `/sub-categories?populate=*&[filter][categories][id][$eq]=${id}}`
    );
    console.log(id);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectSubCat(
      isChecked
        ? [...selectSubCat, value]
        : selectSubCat.filter((item) => item !== value)
    );
  };
  console.log(selectSubCat);

  // console.log(id, data);
  return (
    <>
      <Breadcrumb />
      <section className="product_list section_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="product_sidebar">
                {/* <div className="single_sedebar">
                <form action="#">
                  <input type="text" name="#" placeholder="Search keyword" />
                  <i className="ti-search" />
                </form>
              </div> */}
                {/* <div className="single_sedebar">
                  <div className="select_option">
                    <div className="select_option_list">
                      Category <i className="right fas fa-caret-down" />{" "}
                    </div>
                    <div className="select_option_dropdown">
                      <p>
                        <a href="#">Category 1</a>
                      </p>
                      <p>
                        <a href="#">Category 2</a>
                      </p>
                      <p>
                        <a href="#">Category 3</a>
                      </p>
                      <p>
                        <a href="#">Category 4</a>
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="single_sedebar">
                  <div className="select_option">
                    <div className="select_option_list">
                      Sub-Categories
                      <i className="right fas fa-caret-down" />{" "}
                    </div>
                    <div className="select_option_dropdown">
                      {data?.map((item) => {
                        return (
                          <div key={item.id}className="switch-wrap d-flex justify-content-between">
                            <p>{item.attributes.title}</p>
                            <div className="primary-checkbox">
                              <input
                                type="checkbox"
                                id={item.id}
                                value={item.id}
                                onChange={handleChange}
                              />
                              <label htmlFor={item.id} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="product_list">
                <ProductList catId={id} subCats={selectSubCat}/>
                <div className="load_more_btn text-center">
                  <a href="#" className="btn_3">
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default products;
