import React from "react";
import FeatureCard from "./FeatureCard";
import FeatureInfo from "./FeatureInfo";

const FeaturePart = () => {
  return (
    <section className="feature_part section_padding">
      <div className="container">
        <FeatureInfo />
        <FeatureCard />
      </div>
    </section>
  );
};

export default FeaturePart;
