import { FaFacebook, FaTwitter } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { FooterWrapper } from "./styles";

const Footer = () => {
    return (
        <FooterWrapper>
            <div className="content-sec">
                <img src="/img/logo.png" alt="site logo" />
                <p>Doshpal is a product of Kredify Limited a registered Financial Services Company providing short to medium term financing to Individuals, Small and Medium sized Enterprises (SME) in Nigeria.</p>
                <div className="social">
                    <FaFacebook />
                    <AiFillInstagram />
                    <FaTwitter />
                </div>
            </div>

            <div className="meta-sec">
                <span>All Right Reserved | Kredify Limited | 2022</span>

                <p>
                    Plot 2198 eugene ndubuisi close, <br />
                    lily Estate, amuwo odofin, Lagos. <br />
                    customer@doshpal.com <br />
                    +234 808 870 2139
                </p>
            </div>
        </FooterWrapper>
    );
}
 
export default Footer;