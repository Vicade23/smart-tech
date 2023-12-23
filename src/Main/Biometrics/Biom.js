import { BsChevronRight  } from "react-icons/bs";
import './Biom.scss';

const Biom = () => {
    return ( 
        <section className="biometric">
            <div className='biometric-container'>
                <div className='biometric-img-cont'>
                    <div className='img-cont'></div>
                </div>
                <div className='biometric-texts-cont'>
                    <div className='text-header'>
                        <div className='svg'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="2" viewBox="0 0 38 2" fill="none">
                            <path d="M1 1H37" stroke="#6C060D" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <span>Access control & Biometric Software</span>
                    </div>

                    <div className='text-bold-header'>
                        Access Control & Biometric
                    </div>

                    <div className='text-light-header'>
                        Allegro’s Access Control & Biometrics will allow you 
                        to effectively manage entry and egress from your 
                        facility through a marriage of state of the art hardware 
                        and a user friendly software to ensure the most security.
                    </div>

                    <div className='link-cont'>
                        <a href='#'>
                            <span>Learn more</span> 
                            <div><BsChevronRight /></div>
                        </a>
                    </div>

                </div>
            </div>
        </section>
     );
}
 
export default Biom;