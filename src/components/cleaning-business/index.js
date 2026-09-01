import CancelWheneverIcon from "../../svg/CancelWheneverIcon";
import FreeSetupIcon from "../../svg/FreeSetupIcon";
import MoveDataIcon from "../../svg/MoveDataIcon";
import EnquiryFunnerlIcon from "../../svg/EnquiryFunnerlIcon";
import PaymentReceivedIcon from "../../svg/PaymentReceivedIcon";
import CleaningTechIcon from "../../svg/CleaningTechIcon";
import SinpleToUseIcon from "../../svg/SinpleToUseIcon";
import SimplicityAtWorkIcon from "../../svg/SimplicityAtWorkIcon";
import SimpleToSetUpIcon from "../../svg/SimpleToSetUpIcon";
import DarkMemateBlackBut from "@/layout/hover-button/DarkMemateBlackBut";
import InfiniteImageScroll from "./InfiniteImageScroll";
import AutomotiveQuesitonAndAns from "./AutomotiveQuesitonAndAns";
import CaseStudiesHome from "../../components/casestudies-home";
import EnquiryProfit from "./EnquiryProfit";
import BusinessFeatures from "./BusinessFeatures";
import "./cleaning-business.css";
import Image from "next/image";
import LessBusyness from "@/page-components/landing-page/less-busyness";
import FindOneApplication from "../find-one-all";


const features = [
  {
    icon: <CancelWheneverIcon />,
    text: (
      <>
        Cancel whenever, no
        <br />
        lock-in contracts
      </>
    ),
  },
  {
    icon: <FreeSetupIcon />,
    text: (
      <>
        Free setup, we do
        <br />
        that for you
      </>
    ),
  },
  {
    icon: <MoveDataIcon />,
    text: (
      <>
        Bring your existing
        <br />
        client data, we move
        <br />
        it at no cost
      </>
    ),
  },
];
const CleaningBusinessComponent = () => {
  return (
<>
      <div className="cleaningBusinessWrap">
      <div className="cleaningContainer">
      <div className="cleaningFlex">
      <div className="leftLayoutLayers">
        <div className="cleaninTop">
          <span><em></em>Software for Cleaning Business</span>
          <h1>Your competitors are still<br></br> texting. <b>That's your <br></br>advantage.</b></h1>
          <h5>Enquiries, quotes, jobs, internal chats and invoices.</h5>
          <p>meMate tracks it all properly, so nothing gets lost in<br></br> unread messages or forgotten.</p>
        </div>
     
         <div className="advantage-features">
            {features.map((feature, index) => (
              <div className="advantage-feature" key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>

                <div className="feature-text">
                  {feature.text}
                </div>
              </div>
            ))}
          </div>
  <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      className="alignLeft"
      target="_blank"
      buttonTextdark="Start Free Trial"
      buttonTextlight="Request a Demo"
      showButton1={true}
      showButton2={true}
    />
       </div>
       </div>
       <div className="rightLayoutLayers">
       <div className="topLeftLayers">
         <div className="demo-bubble positionValue">
            <strong>Let us show you</strong>
            <span><em>▶</em> 10 Min Demo →</span>
          </div>
              <div className="enquiries-card positionValue">
            <div className="card-small-icon"><EnquiryFunnerlIcon /></div>

            <div>
              <span className="card-label">Enquiries</span>

              <div className="enquiry-value">
                <strong>15</strong>
                <small>↗ 10%</small>
              </div>
            </div>
          </div>
        </div>
        <div className="middleLayoutLayers">
          
                   <Image
                    alt="Your competitors are still texting. That's your advantage."
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/cleaningBusinessGirl-img1.png"                          
                    priority                      
                    placeholder="empty"         
                    width={538} height={474}
                  />
                  </div>
                   <div className="bottomRightLayers">
                  
        <div className="positionValue paymentCardWrap">
             <Image
                    alt="Your competitors are still texting. That's your advantage."
                    src="https://memate-website.s3.ap-southeast-2.amazonaws.com/dolor-img.png"                          
                    priority                      
                    placeholder="empty"         
                    width={65} height={46}
                  />
        <div className="payment-card">
         
            <div className="payment-icon"><PaymentReceivedIcon /></div>

            <div>
              <span className="payment-label">
                Payment Received
              </span>

              <strong>$1,385</strong>
            </div>
          </div>
          </div>
          <div className="job-completed positionValue">
            <span className="check-icon"><CleaningTechIcon /></span>
            Job Complete
          </div>
                  </div>
       </div>
       </div>

  </div>
     <div className="trustedByCleningWrapper">
     <div className="trustedByCleningWrap">
        <div className="trustedByHead">
           <h2>Trusted by cleaning<br></br> businesses <span>across Australia</span> 
             <img src='https://memate-website.s3.ap-southeast-2.amazonaws.com/%F0%9F%87%A6%F0%9F%87%BA-flag-img.png' alt="Australia Flag" />
           </h2>
       </div>
    </div>
    </div>
   <InfiniteImageScroll />
   <div className="EnquiryProfitWrap">
   <EnquiryProfit />
   </div>

      </div>
      <LessBusyness /> 
        <FindOneApplication /> 
      <div className="BusinessFeaturesWrap">
          <BusinessFeatures /> 
        </div>
      <div className="cleaningBusinessListWrap">
          <div className="ListWrap">Simple to <SinpleToUseIcon /> <span>use</span></div>
          <div className="ListWrap">Simplicity at <SimplicityAtWorkIcon /> <span>work</span></div>
          <div className="ListWrap">Simple to <SimpleToSetUpIcon /> <span>set up</span></div>
        </div>
      <div className="AustralianBusinessesWrap">
         <CaseStudiesHome />   
           <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      target="_blank"
      buttonTextdark="Book a Demo"
      buttonTextlight="Start Free Trial"
      showButton1={true}
      showButton2={true}
    />
       </div>
        </div>
      <div className="AustralianBusinessesWrap">
        <AutomotiveQuesitonAndAns />
        </div>
        <section className="business-hero">
        <div className="business-hero__image">
          <div className="business-hero__content">
            <h1 className="business-hero__title">
              More Business - Less Busyness
            </h1>
            <p className="business-hero__subtitle smokeyGradient1">
              <span>Smarter</span>
              <b> · </b>
              <span>Faster</span>
              <b> · </b>
              <span>Digital</span>
            </p>
             <div className='topSpaceGap'>
         <DarkMemateBlackBut
      link1="https://app.memate.com.au/requestdemo"
      link2="https://app.memate.com.au/onboarding"
      target="_blank"
      buttonTextdark="Show Me How It Works"
      buttonTextlight="Start Free Trial"
      showButton1={true}
      showButton2={true}
    />
       </div>
          </div>
        </div>
    </section>
      


</>
  );
};

export default CleaningBusinessComponent;
