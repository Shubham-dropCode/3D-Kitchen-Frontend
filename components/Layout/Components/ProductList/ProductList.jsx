import Link from "next/link";
import useFetch from "../../../../context/productContext";

const ProductList = ({ catId, subCats }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${catId}${subCats.map(item => `&filters[sub-categories][id][$eq]=${item}`)}`);


  console.log("this is a testing clg", data);
  return (
    <div className="row">
      {data?.map((item) => {
        return (
          <div className="col-md-4 col-sm-12" key={item.id}>
            <div className="single_product_item">
              <img
                src={process.env.NEXT_PUBLIC_UPLOAD_URL + item.attributes.Thumbnail_Image.data.attributes.url}
                alt="#"
                className="img-fluid"
              />
              <h3>
                <Link href={`/products/${item.id}`}>
                  {item.attributes.Title}
                </Link>
              </h3>
              <p>From $5</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
