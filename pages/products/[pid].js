import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import ProductSlider from "../../components/Layout/Components/ProductSlider/ProductSlider";
import useFetch from "../../context/productContext";
import { addToCart } from "../../Redux/cartReducer";
const pid = () => {
  const router = useRouter();
  const pid = router.query.pid;
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { data, loading, error } = useFetch(`/products/${pid}?populate=*`);

  console.log(data);

  return (
    <>
      <section className="breadcrumb_part single_product_breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner">
                <h2 className="text-white">{data?.attributes?.Title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="product_image_area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="product_img_slide">
                <div className="single_product_img justify-item-center">
                  <ProductSlider images={data?.attributes?.Slider_Image} />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="single_product_text text-center">
                <h3>{data?.attributes?.Title}</h3>
                <p>{data?.attributes?.Sub_Title}</p>
                <div className="card_area">
                  <div className="product_count_area">
                    <p>Quantity</p>
                    <div className="product_count d-inline-block">
                      <span
                        className="product_count_item inumber-decrement"
                        onClick={() =>
                          setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                        }
                      >
                        <i className="ti-minus" />
                      </span>
                      <div className="product_count_item input-number">
                        {quantity}
                      </div>
                      <span
                        className="product_count_item number-increment"
                        onClick={() => setQuantity((prev) => prev + 1)}
                      >
                        <i className="ti-plus" />
                      </span>
                    </div>
                    <p>$5</p>
                  </div>
                  <div className="add_to_cart">
                    <button
                      onClick={() => dispatch(addToCart(data))}
                      className="btn_3"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="subscribe_part section_padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="subscribe_part_content">
                <h2>Get promotions &amp; updates!</h2>
                <p>
                  Seamlessly empower fully researched growth strategies and
                  interoperable internal or “organic” sources credibly innovate
                  granular internal .
                </p>
                <div className="subscribe_form">
                  <input type="email" placeholder="Enter your mail" />
                  <a href="#" className="btn_1">
                    Subscribe
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

export default pid;
