import React from 'react'
import Banner from '../component/featurepage/banner'
import LogoSection from '../component/featurepage/LogoSection'
import Benefits from '../component/aboutpage/Benefits'
import Reuseablebenifits from '../../Reuseable/Reuseablebenifits'
import ReuseableMission from '../component/ReuseableMission'
import FeatureMission from '../component/featurepage/FeatureMission'
import FAQ from '../component/FAQ'

const FeaturePage = () => {
  return (
<>
<Banner/>
<LogoSection/>
<Reuseablebenifits/>
<FeatureMission/>
<FAQ/>
</>
  )
}

export default FeaturePage