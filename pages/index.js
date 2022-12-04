
import Category from "../components/Layout/Components/Category/Category"
import FeatureInfo from "../components/Layout/Components/FeaturePart/FeatureInfo";
import FeaturePart from "../components/Layout/Components/FeaturePart/FeaturePart";
import HomeBanner from "../components/Layout/Components/HomeBanner/HomeBanner";
import ProductList from "../components/Layout/Components/HomeProductList/HomeProductList";
import TrendingItem from "../components/Layout/Components/TrendingItem/TrendingItem";


export default function Home() {
  return (
    <>
      <HomeBanner />
      <div className="feature_seaction section_padding">
      <FeatureInfo/>
      </div>
      <ProductList/>
      <Category />
      <TrendingItem type="trending"/>
      <FeaturePart/>
    </>
  );
}
