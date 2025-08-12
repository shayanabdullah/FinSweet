import React from 'react'
import ReuseableMission from '../ReuseableMission'
import img1 from '../../assets/featureimg1.png'
import img2 from '../../assets/featureimg2.png'
import img3 from '../../assets/featureimg3.png'
import img4 from '../../assets/featureimg4.png'
import ReauseablMisiontwo from '../ReauseablMisiontwo'
const FeatureMission = () => {
    return (
        <>
            <ReuseableMission title='Use Client-first' header='Top agencies and freelancers' span2="Client-first" span='around the world use ' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.' src={img1} />
             <ReauseablMisiontwo title='Free Revision Rounds' header='Get free Revisions and one week' span="of free maintenance"  para='orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' src={img2} className='bg-[#F4F6FC]'/>
             <ReuseableMission title='24/7 Support' header='Working with us, you will be ' span='getting 24/7 priority support' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' src={img3} />
             <ReauseablMisiontwo className='bg-[#F4F6FC]'    title='' header='Guranteed 1 week delivery for ' span='standard five pager website' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.' src={img4}/>
        </>
    )
}

export default FeatureMission