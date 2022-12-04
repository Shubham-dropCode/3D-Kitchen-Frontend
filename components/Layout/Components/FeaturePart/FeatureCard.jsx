import React from 'react'

const FeatureCard = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-3 col-sm-6">
        <div className="single_feature_part">
          <img src="img/icon/feature_icon_1.svg" alt="#" />
          <h4>Credit Card Support</h4>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single_feature_part">
          <img src="img/icon/feature_icon_2.svg" alt="#" />
          <h4>Online Order</h4>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single_feature_part">
          <img src="img/icon/feature_icon_3.svg" alt="#" />
          <h4>Free Delivery</h4>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single_feature_part">
          <img src="img/icon/feature_icon_4.svg" alt="#" />
          <h4>Product with Gift</h4>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard