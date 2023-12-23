import './Offer.scss';
import withLoader from '../../withLoader';
import FrameI from './frame1';
import FrameII from './frame2';
import FrameIII from './frame3';
import { BsChevronRight  } from "react-icons/bs";

const Framei = withLoader(FrameI)
const Frameii = withLoader(FrameII)
const Frameiii = withLoader(FrameIII)
const Offer = () => {
    return ( 
        <section className="offer-container">

            <div className='offer-text-container'>
                <h1>What we are offering you</h1>
                <h5>
                    Experience our world class customer centic solutions. Check out what we 
                    have to offer you since we place a lot of importance on our consumers.
                </h5>
            </div>

            <div className='offer-img-main-container'>
                <div className='offer-img-container'>
                    <div className='img-container'>
                        <div className='frame1'><Framei /></div>
                        <div className='frame2'><Frameii /></div>
                        <div className='frame3'><Frameiii /></div>
                    </div>
                    <div className='texts-container'>
                        <div className='text-header'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="2" viewBox="0 0 38 2" fill="none">
                                    <path d="M1 1H37" stroke="black" strokeLinecap="round"/>
                                </svg>
                            </div>
                            <span>Data Management Sotware</span>
                        </div>

                        <div className='text-bold-header'>
                            Enterprise Data Management System (EDMS)
                        </div> 

                        <div className='text-light-header'>
                            Allegro’s Enterprise Data Management System (EDMS) solutions provide 
                            a structured data delivery strategy that helps 
                            today’s data-driven organizations govern what data is collected, how 
                            it is stored, who has access and what level of protection it needs.
                        </div>

                        <div className='learn-more-link-container'>
                            <a href='#'>
                                <span>Learn More </span>
                                <div><BsChevronRight /></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default Offer;