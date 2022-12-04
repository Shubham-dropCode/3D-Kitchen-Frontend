import React from 'react'
import FeaturePart from '../components/Layout/Components/FeaturePart/FeaturePart'
import OurMission from '../components/Layout/Components/OurMission/OurMission'
import Breadcrumb from '../components/Layout/Components/Breadcrumb/Breadcrumb'
const about = () => {
  return (
    <>
    <Breadcrumb/>
      <OurMission/>
      <FeaturePart/>
    </>
  )
}

export default about