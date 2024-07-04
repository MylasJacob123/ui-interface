import "./section-B.css";
import image01 from "../assets/images/image-retro-pcs.jpg";
import image02 from "../assets/images/image-top-laptops.jpg"
import image03 from "../assets/images/image-gaming-growth.jpg"

 function sectionB() {
  return (
    <div className="sectionB-folder">
        <div className="more-info">
            <img src={image01} />
            <div className="info">
                <h2>01</h2>
                <h4>Reviving Retro PCs</h4>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className="more-info">
            <img src={image02} />
            <div className="info">
                <h2>02</h2>
                <h4>Top 10 Laptops of 2022</h4>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className="more-info">
            <img src={image03} />
            <div className="info">
                <h2>03</h2>
                <h4>The Growth of Gaming</h4>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
  )
}
export default sectionB