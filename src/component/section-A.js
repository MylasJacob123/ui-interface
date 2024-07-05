import "./section-A.css";
import image from "../assets/images/image-web-3-desktop.jpg";

function sectionA() {
  return (
    // <div className="sectionA-folder">
    //   <div className="half1">
    //     <img className="desktop-img" src={image} />
    //     <div className="beneath-img">
    //       <div className="statement">
    //         <p>The Bright Future of Web 3.0?</p>
    //       </div>
    //       <div className="paragraph">
    //         <p>
    //           We dive into the next evolution of the web that claims to put the
    //           power of the platforms back into the hands of the people. But is
    //           it really fulfilling its promise?
    //         </p>
    //         <button></button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="half2">
    //     <h1>New</h1>

    //     <h4>Hydrogen VS Electric Cars</h4>
    //     <p>Will hydrogen-fueled cars ever catch up to EVs?</p>

    //     <h4>The Downsides of AI Artistry</h4>
    //     <p>
    //       What are the possible adverse effects of on-demand AI image
    //       generation?
    //     </p>

    //     <h4>Is VC Funding Drying Up?</h4>
    //     <p>
    //       Private funding by VC firms is down 50% YOY. We take a look at what
    //       that means.
    //     </p>
    //   </div>
    // </div>

    <div className="container">
      <div className="left-container">
        <div className="img-container"></div>
        <div className="beneath-img">
          <div className="statement">
            <p className="bold">The Bright Future of Web 3.0?</p>
          </div>
          <div className="paragraph">
            <p className="left-container-paragraph">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="button">READ MORE</button>
          </div>
        </div>
      </div>
      <div className="right-container">
        <h1>New</h1>

        <h4 className="right-container-heading">Hydrogen VS Electric Cars</h4>
        <p className="right-container-paragraph">Will hydrogen-fueled cars ever catch up to EVs?</p>
        <hr />

        <h4 className="right-container-heading">The Downsides of AI Artistry</h4>
        <p className="right-container-paragraph">
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
        <hr />

        <h4 className="right-container-heading">Is VC Funding Drying Up?</h4>
        <p className="right-container-paragraph">
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </div>
  );
}
export default sectionA;
