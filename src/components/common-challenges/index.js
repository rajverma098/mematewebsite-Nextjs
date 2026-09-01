import { LazyLoadImage } from "react-lazy-load-image-component";
import "./style.css";
import ScrollAnimation from "./ScrollAnimation";
import MobileScrollSection from "./MobileScrollSection";
import DashboardStats from "./DashboardStats";

const CommonChallenges = () => {
  return (
    <div className="common-box-wrapper">
      <div className="common-box1">
        <div className="challenges-text">
          <h3>Streamline Your Business <br/>and Enjoy Full Control</h3>
          <p>Track, analyze, and manage all your business activities in one clear, organized place.</p>
        </div>
        <div className="streamlineimggrid streamlineimggrid12">
            <ScrollAnimation />
            <MobileScrollSection />
              <div className="gridboxstreamline item3"> 
              <DashboardStats />
            </div> 
            <div className="gridboxstreamline item4"> 
               <LazyLoadImage
                            alt="Overcome challenges caused by manual processes"
                            src={'https://memate-website.s3.ap-southeast-2.amazonaws.com/assets/slider/streamline-img24-min.jpg'}
                            effect="blur" 
                            style={{ width: "100%", height: "auto" }}
                          />
                <h4>Overcome scaling challenges <br/> caused by manual processes</h4>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CommonChallenges;
