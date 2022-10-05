import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div id="About" >
      <div className="sections">
        <div className="contain">
          <div className="image-sections" data-aos="fade-left">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.9qbZY-Nqj4UbNDFfScLSoAHaFe&pid=Api&P=0"
              alt=""
              srcset=""
            />
          </div>
          <div className="content-sections">
            <div className="titles">
              <h1 data-aos="flip-left">About Us</h1>
            </div>
            <div className="contents" data-aos="fade-right">
              <p data-aos="fade-right">
                While in search of customers many hawkers roam various places
                still don't find customers hence their time and money both get
                wasted to resolve this issue we have come up with the solution
                that whatever goods customer want to purchase he will inform the
                hawker or vendor. The hawker will know address of customer and
                will deliver goods directly at his place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
