import React from 'react'
import './style.css'
import DarkMemateBlackBut from '@/layout/hover-button/DarkMemateBlackBut';
const IndustryHeader = () => {
  return (
    <>
    <div className='NextHeaderWrap'>
      <h1>Agency Management Software for Creative Agencies | meMate</h1>
      <h2>software for creatives</h2>
      <p>Easily create and quote your projects based on hourly rates or cost-of-sale models, <br/>ensuring accurate and efficient pricing for your creative work.</p>
    </div>
      <div className='NextHeaderWrapper'>
    <div className='industryNewHead'>
    <div className='LeftSide'>
      <span className='leftSpan'>Empower your</span>
       <h4>marketing & creative agencies</h4>
       <p>meMate – Comprehensive Business Management Software for Creative Agencies. Allows you to combine the best features of project management, accounting, quoting, and invoicing. Communicate with clients and submit jobs from a single, centralised platform.</p>
       <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      className="alignLeft"
      target="_blank"
      buttonTextdark="Book a Demo"
      buttonTextlight="Start Free Trial"
      showButton1={true}
      showButton2={true}
    />
       </div>
    </div>
    <div className='RightSide'>
     <img src="https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/industry-new-img.png" width="100%" alt="industry-specific software solutions"/>
    </div>
    </div>
   </div>
    </>
  )
}

export default IndustryHeader
