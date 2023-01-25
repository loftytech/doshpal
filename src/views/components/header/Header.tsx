import { IoMenuOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { Wrapper } from "./styles";

const Header = () => (
    <Wrapper>
        <Link to={"/"} ><img src="/img/logo.png" alt="site logo" /></Link>
        <nav>
            <ul>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/">Apply for loan</Link></li>
            </ul>
        </nav>

        <div className="toggle-menu">
            <IoMenuOutline />
        </div>
    </Wrapper>
)
 
export default Header;