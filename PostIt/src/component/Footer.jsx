
import arrow from "../assets/arrow.png";
import "../style/Footer.css";
import icons from "../assets/icons.png";

export const Footer = () => {
  return (
    <div>
      <div className="foot">
        <div className="footer">
          <div className="footdiv1">
            <h4 className="text-white">
              About Post <span className=" text-blue-500">it</span>.
            </h4>

            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              id sem vel quis in turpis sit eget pellentesque. Nunc etiicies in
              rhoncus, rhoncus in arcu. Tincidunt neque fusce vitaenisi aliquet.
              que maeae tortoere necsem commodo ac.
            </p>
          </div>

          <div className="footdiv2">
            <h5 className="text-white">Quick menu</h5>

            <div className="list1">
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Stories</a>
                </li>
                <li>
                  <a href="">TrendingStories</a>
                </li>
                <li>
                  <a href="">Popular Stories</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footdiv3">
            <div>
              <ul>
                <li>
                  <a href="">Sign Up</a>
                </li>
                <li>
                  <a href="">Log In</a>
                </li>
                <li>
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footdiv4">
            <h5 className="text-white">Subscribe to our newsletter</h5>
            <div className="Input">
              <input
                className="input2"
                type="text"
                placeholder="Enter Email Address"
              />
              <button className="footerbtn">
                Subscribe{" "}
                <span>
                  <img src={arrow} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          
          <div className="terms">
            <span className="text-white spanterm"> Terms and Policy </span> <img  src={icons} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
};
