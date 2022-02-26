import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import Registerpop from './Registerpop';
import Loginpop from './Loginpop';

const Header = () => {

    return(
        <>
            <div className="d-flex justify-content-end me-3 mt-3">
            <Registerpop />
            <Loginpop />
            </div>
            <div className="header text-center">
                <img src={logo} className= 'logo' alt='logo'/>
            </div>
            <div className='mt-3'> 
                <ul className='menu border border-2 d-flex justify-content-center border border-secondary'>
                    <li className='border border-2 border-top-0 border-bottom-0 border-right-0 ps-3 pe-3 border border-secondary pt-2 pb-2'><Link to="/" className='enlace'>HOME</Link></li>
                    <li className='border border-2 border-top-0 border-bottom-0 border-left-0 ps-3 pe-3 border border-secondary pt-2 pb-2'><Link to="/starship" className='enlace'>STARSHIP</Link></li>
                </ul>
            </div>
        </>

    );
}

export default Header;