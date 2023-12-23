import './Org.scss';
import Dbn from './dbn';
import Img3m from './imgs3m';
import Pppra from './pppra';
import Silverbird from './silverbird';
import { BsArrowRight } from "react-icons/bs";
import withLoader from '../../withLoader';

const Silv = withLoader(Silverbird);
const Img3ms = withLoader(Img3m);
const Pppraa = withLoader(Pppra);
const Dbns = withLoader(Dbn);
const Org = () => {
    return (
        <section className="org-container">
            <div className='org-bold-text'>
                Fast growing organizations that 
                <span>{' '}Trust us</span>
            </div>
            <div className='org-light-text'>
                We  are trusted by these satified organizations.
            </div>
            <div className='org-img-alt'>
                <button className='org-btn'>Read more <BsArrowRight /></button>
            </div>

            <div className='org-img-main-container'>
                <div className='org-img-container'>
                    <Silv />
                    <Img3ms />
                    <Pppraa />
                    <Dbns />
                </div>
            </div>
            
        </section>
    );
}
export default Org;