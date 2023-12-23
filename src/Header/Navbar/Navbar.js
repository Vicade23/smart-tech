import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import './Navbar.scss'

const Navbar = () => {
    return (
        <section className='navbar'>
            <div className='navbar-body'>
                <Logo />
                <Nav />
            </div>
            <div className='slide-nav1 dropdown-slide'>
                <ul>
                    <div className='dropdown-list-container'>
                        <li className='list-tag'>
                            <a href='#' className='list-link'>
                                <div className='link-div'>Home</div>
                            </a>
                        </li>
                        
                        <li className='list-tag'>
                            <a href='#' className='list-link'>
                                <div className='link-div'>Product</div>
                            </a>
                        </li>
                    </div>

                    <div className='dropdown-list-container'>
                        <li className='list-tag'>
                            <a href='#' className='list-link'>
                                <div className='link-div'>Company</div>
                            </a>
                        </li>
                        
                        <li className='list-tag'>
                            <a href='#' className='list-link'>
                                <div className='link-div'>Contact</div>
                            </a>
                        </li>
                    </div>
                </ul>
            </div>
        </section>
    );
}
export default Navbar;