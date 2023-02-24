import IronLogo from '../images/ironhack-logo-xs.png';
import Menu from '../images/menu-top-xs.png';

const Navbar = () => {
    return (
       <nav>
         <ul>
            <li><img className="img" id= "logo" src={IronLogo} alt="ironlogo" /></li>
            <li><img className="img" id= "menu" src={Menu} alt="menu" /></li>
         </ul>
       </nav>
       
    )
};

export default Navbar;