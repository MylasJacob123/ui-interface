import "./section-B.css";
import image01 from "../assets/images/image-retro-pcs.jpg";
import image02 from "../assets/images/image-top-laptops.jpg"
import image03 from "../assets/images/image-gaming-growth.jpg"

 function sectionB() {
  return (
    <div className="sectionB-folder">
        <div className="more-info">
            <img className="sectionB-images" src={image01} />
            <div className="info">
                <h2>01</h2>
                <h4 className="info-headings">Reviving Retro PCs</h4>
                <p className="info-paragraphs">What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className="more-info">
            <img className="sectionB-images" src={image02} />
            <div className="info">
                <h2>02</h2>
                <h4 className="info-headings">Top 10 Laptops of 2022</h4>
                <p className="info-paragraphs">Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className="more-info">
            <img className="sectionB-images" src={image03} />
            <div className="info">
                <h2>03</h2>
                <h4 className="info-headings">The Growth of Gaming</h4>
                <p className="info-paragraphs03">How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}
export default sectionB