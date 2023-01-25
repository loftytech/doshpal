import { useRef } from 'react';
import { IoMenuOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setNavigation } from '../../../slices/navigationSlice';
import { NavigationWrapper, Wrapper } from "./styles";

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const toggleState = useAppSelector(state => state.navigation.state);

    const sidebarRef = useRef(null)

    const closeMenu = (e: { target: any }) => {
        if (e.target === sidebarRef.current) {
            dispatch(setNavigation(false));
        }
    }


    return (
        <Wrapper>
            <Link to={"/"} ><img src="/img/logo.png" alt="site logo" /></Link>
            <NavigationWrapper ref={sidebarRef} onClick={e => closeMenu(e)} navigationState={toggleState}>
                <ul>
                    <div className="nav-logo"><Link to={"/"} ><img src="/img/logo.png" alt="site logo" /></Link></div>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/loan">Apply for loan</Link></li>
                </ul>
            </NavigationWrapper>

            <div className="toggle-menu" onClick={ () => dispatch(setNavigation(true))}>
                <IoMenuOutline />
            </div>
        </Wrapper>
    )
}
 
export default Header;