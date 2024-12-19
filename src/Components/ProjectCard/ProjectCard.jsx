import "./project.css"
import { RxCross1 } from "react-icons/rx";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function ProjectCard() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.to(".page1", {
      scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: false,
        toggleActions: "play none none reverse"
      },
      width: "96%",
      x: "2%",
      ease: "none"
    });

    gsap.to(".Image", {
      scrollTrigger: {
        trigger: ".ImageAndDesc",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      y: "-30%",
      ease: "none"
    });

    // Header text fade out animation
    gsap.to(".header", {
      scrollTrigger: {
        trigger: ".page1",
        start: "top top",
        end: "20% top", // Adjust this value to control when fade completes
        scrub: true,
      },
      opacity: 0,
      ease: "none"
    });

  }, []);

  return (
    <>
    <div className="main">
        <div className="page1">
            <div className="header">
                <h2 className="headerContent1">Villa v</h2>
                <h1 className="headerContent2">In Harmony With Nature</h1>
            </div>
            <div className="crossBtn">
                <RxCross1 className="icon1"/>
            </div>
        </div>
        <div className="page2">
            <div className="text">
                <div className="textContent">
                <p className="para">Our clients desire to live in harmony with nature, plus the undulating topography of the site, inspired our design for Villa V a series of volumes that emerges gently from the hillside.</p>
                </div>
            </div>
            <div className="Info">
                <h2 className="Infoheader">Key info</h2>
            </div>
            <div className="flexBox">
                <div className="flexBox1">
                    <h2>Budget</h2>
                    <p>Confidential</p>
                </div>
                <div className="flexBox2">
                <h2>Budget</h2>
                <p>Confidential</p>
                </div>
                <div className="flexBox3">
                <h2>Budget</h2>
                <p>Confidential</p>
                </div>
                <div className="flexBox4">
                <h2>Budget</h2>
                <p>Confidential</p>
                </div>
                <div className="flexBox5">
                <h2>Budget</h2>
                <p>Confidential</p>
                </div>
                <div className="flexBox6">
                <h2>Budget</h2>
                <p>Confidential</p>
                </div>
                <div className="flexBox7">
                <h2>Budget</h2>
                <p>Confidential</p>
                </div>
                <div className="flexBox8">
                <h2>Budget</h2>
                <p>Confidential</p>
                </div>
            </div>
        </div>
        <div className="page3">
            <div className="thirdPageImage"></div>
        </div>
        <div className="page4">
            <div className="mainText">
                <h1 className="textHeader">In a clearing in the forest, we created a cascade of light-filled spaces.</h1>
                <div className="ImageAndName">
                <div className="smallImageDiv"></div>
                <h4 className="nameHeader">Johanne Borthne</h4>
                </div>
            </div>
            <div className="ImageAndDesc">
                <div className="Image"></div>
                <div className="Desc">
                    <div className="DescText">
                        <h1 className="DescTextHeader">Forest enhancement</h1>
                        <p className="DescPara">Making the most of a woodland setting with hilly contours, we stacked three tiers of volumes in the landscape, creating a playful series of in-between space along the façades. We opened up entire façades so that indoor and outdoor spaces blur, and the cantilevered volumes of the upper floors seem to float on top of the ground-level glass facade.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="page5">
            <div className="slideBar"></div>
            <div className="slidebox">
                <div className="slideDiscBox">
                    <p className="slideDiscPara">
                        <span className="span">Ground Floor - </span>
                        We placed a courtyard at the heart of the house. This brings in light and forms voids around which we organized the spaces, maximizing natural light and views of the countryside in each and every room. 
                    </p>
                </div>
            </div>
        </div>
        <div className="page6">
            <div className="textBox">
                <div className="textContentBox">
                <p className="textBoxPara">The spaces have varying degrees of openness and intimacy that reflect their specific functions, creating a harmonious experience of space, views and light</p>
                <div className="smallImageDiv"></div>
                <p className="nameHeader">Johanne Borthne</p>
                </div>
                
            </div>
                {/* <div className="ImageDiv"></div> */}
                <div className="ImageDiv"></div>
        </div>
        <div className="page7">
            <div className="mainTextBox">
                <p className="mainTextPara">Start the Conversation</p>
            </div>
            <div className="ButtonBox">
                <button className="btn">Ask us anything</button>
            </div>
            <div className="ImageAndContent">
                <div className="textArea">
                    <div className="content1">
                        <p className="para">Next Project</p>
                    </div>
                </div>
                <div className="ImageArea">
                    <div className="Image"></div>
                </div>
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ProjectCard
