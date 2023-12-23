import './Nav.scss';
// import { BsCaretDown } from 'react-icons/bs';
import { BsChevronDown, BsList } from "react-icons/bs";

const Nav = () => {
    const addDropdown = () => {
        const dropdown = document.querySelector('.dropdown');
        dropdown.classList.toggle('list-ul');
        dropdown.classList.toggle('on-hovering');
    }

    const drop = () => {
        const slideNav = document.querySelector('.slide-nav1');
        const headerContainer = document.querySelector('.header-inner-container');
        slideNav.classList.toggle('slide-nav2');
        headerContainer.classList.toggle('header-inner-container2');
    }
    return (
    <div className='nav-container'>
        <div className='toggler-container'>
            <button onClick={ drop } className='toggler'>
                <span><BsList /></span>
            </button>
        </div>

        <ul className='list-container'>
            <li className='list list-home'>
                <a href='#' className='nav-link link-home'>Home</a>
            </li>
            <li className='list'>
                <a onClick={ addDropdown } className='product-nav nav-link nav-link-btn'>
                    Product
                    <span><BsChevronDown /></span>
                </a>
                <ul onMouseLeave={ addDropdown } className='dropdown list-ul'>
                    <div className='pointer'></div>
                    <li className='ul-list'>
                        <a href='#' className='list-a'>
                            <div>Cheese</div> 
                        </a>
                    </li>
                    <li className='ul-list'>
                        <a href='#' className='list-a'>
                            <div>Candy</div> 
                        </a>
                    </li>
                    <li className='ul-list'>
                        <a href='#' className='list-a'>
                            <div>Chocolate</div> 
                        </a>
                    </li>
                </ul>
            </li>
            <li className='list'>
                <a href='#' className='nav-link'>Company</a>
            </li>
            <li className='list'>
                <a href='#' className='nav-link'>Contact</a>
            </li>
        </ul>

        {/* exported the mobile nav list element */}
    </div>
    );
}
export default Nav;