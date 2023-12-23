import './Coordinate.scss';
import { BsChevronRight  } from "react-icons/bs";

const Coordinate = () => {
    return ( 
        <section className='coordinate'>
            <div className='coordinate-container'>
                <div className='coordinate-text'>
                    <div className='text-bold'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="2" viewBox="0 0 38 2" fill="none">
                                <path d="M1 1H37" stroke="black" strokeLinecap="round"/>
                            </svg>
                        </div>
                        Business Coordination Software
                    </div>

                    <div className='text-light'>
                        Minerva is a business coordination software, which 
                        enables workers and the organization they work for 
                        attain their full potential by making everyone more effective.
                    </div>

                    <div className='text-link'>
                        <a href='#'>
                            <span>Learn more</span>
                            <div><BsChevronRight /></div>
                        </a>
                    </div>
                </div>
                <div className='coordinate-img'>
                    <div className='coord-inner-img'></div>
                </div>
            </div>
        </section>
     );
}
 
export default Coordinate;