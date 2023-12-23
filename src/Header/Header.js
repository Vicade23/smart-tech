import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import withLoader from '../withLoader';
import './Header.scss';

// const UserWithLoader = withLoader(Hero)
const Header = () => {
    return (
        <header>
            <div className='header-inner-container'>
                <Navbar />
                <Hero />
            </div>
        </header>
    );
}
export default Header;