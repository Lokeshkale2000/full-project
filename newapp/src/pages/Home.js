import React from "react";
import Banner from "../Assets/Banner.jpg"; 
import Container4 from '../Assets/Sandy_GrayContainer4.jpg'
import "./Home.css";

const Home = () => {
  return (<>
    <div className="container">
      <div className="container1">
        <p className="PagTitle">
          THE <br></br>FINEST
          <br></br> QUALITY <br></br>WHISKY <br></br>& GIN.
        </p>
        <p className="subtitle">
          Our mission and obsession is to produce the finest <br></br>quality whisky and
          gin. We distill in extremely <br></br>small batches to focus on all processes
          to ensure <br></br>that our spirits are among the finest available.
        </p>
      </div>
      <div className="container2">
        <img src={Banner} alt="Banner" />
      </div>
    </div>
    <br></br>
    
    <div className="container-main">
      <div className="container3">
        <p className="container3-p">Life as a General Practitioner in the National Health Service was not very lucrative and Burnley was an industrial town, and so in 1967 the family emigrated to Tasmania, first of all to Cygnet and then to Evandale. He was very much a countryman at heart and as a boy spent a lot of time at his grandfather Murray's farm in Midmar, Aberdeenshire. The practice in Evandale was perfect for him as it was it was a farming area and he could relate well to his patients.
<br></br><br></br>
He retired in 1986 and died in 2001
<br></br> <br></br>

His son Neil gained an appreciation of fly fishing, music and a love for whisky and gin from his father so it was decided to name the distilling business in honour of him</p>
      </div>
      <div className=" container4">
        <img src={Container4} alt="Container4"></img>
      </div>
    </div>
    </>
  );
};

export default Home;
