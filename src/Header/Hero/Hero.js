import './Hero.scss';
import hero from '../../images/hero.png';
import circular from '../../images/circular.png'
const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='hero-img-container'>
                <img className='hero-img' src={hero} alt='Hero'></img>
                <div className='hero-gradient'>

                    {/* svg container */}
                    <div className='svg-collation'>

                        <div className='svg-container svg-container1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="500" height="532" viewBox="0 0 500 532" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M498.922 363.066C499.688 409.424 455.096 447.798 414.921 470.941C376.92 492.833 329.126 475.525 286.416 485.484C242.25 495.783 205.651 533.419 160.408 530.288C111.912 526.933 66.8812 501.041 31.3766 467.838C-5.79038 433.079 -56.4426 387.994 -44.6879 338.483C-31.1094 281.29 64.8296 281.299 88.4439 227.468C108.49 181.772 28.5731 112.43 67.9314 81.7554C108.816 49.8909 163.144 145.468 212.789 130.558C270.529 113.215 275.267 9.05142 335.082 1.51714C384.39 -4.6935 427.179 54.2627 442.063 101.679C456.845 148.773 400.676 195.686 411.168 243.918C421.834 292.951 498.092 312.892 498.922 363.066Z" 
                            stroke="url(#paint0_linear_0_560)" strokeOpacity="0.2" strokeWidth="1.72076"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_560" x1="737.732" y1="85.19" x2="-189.656" y2="215.671" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFBEC3"/>
                                <stop offset="1" stopColor="#BE1622"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        
                        <div className='svg-container svg-container2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="531" height="554" viewBox="0 0 531 554" fill="none">
                            <path opacity="0.916667" fillRule="evenodd" clipRule="evenodd" d="M529.369 344.017C535.729 390.188 496.088 434.001 458.993 462.068C423.905 488.616 374.36 477.253 333.156 492.475C290.546 508.215 258.753 550.303 213.453 552.774C164.896 555.423 117.057 535.153 77.7938 506.406C36.6925 476.313 -19.0458 437.582 -13.3543 386.715C-6.77975 327.956 88.4799 316.1 105.425 259.455C119.81 211.37 32.0849 152.049 67.4592 116.568C104.205 79.71 169.691 168.379 217.183 147.358C272.419 122.909 264.543 18.3654 323.024 3.44818C371.232 -8.84833 420.838 44.6989 441.343 90.1802C461.708 135.353 411.604 189.12 427.847 235.958C444.359 283.576 522.485 294.045 529.369 344.017Z" stroke="url(#paint0_linear_0_559)" strokeOpacity="0.2" strokeWidth="1.72076"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_559" x1="732.923" y1="37.1568" x2="-173.247" y2="277.859" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFBEC3"/>
                                <stop offset="1" stopColor="#BE1622"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        
                        <div className='svg-container svg-container3'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="539" height="571" viewBox="0 0 539 571" fill="none">
                            <path opacity="0.833333" fillRule="evenodd" clipRule="evenodd" d="M535.166 319.687C547.086 364.996 513.058 413.609 479.645 446.19C448.04 477.007 397.48 471.759 358.428 492.023C318.044 512.977 291.596 558.902 246.93 566.942C199.052 575.559 149.104 561.208 106.639 537.341C62.1863 512.357 2.15524 480.549 1.62741 429.071C1.01769 369.605 94.1356 346.052 104.077 287.421C112.516 237.65 18.2336 189.224 49.0382 149.453C81.0377 108.139 156.809 188.598 201.398 161.772C253.258 130.571 232.744 27.1786 288.983 5.09358C335.342 -13.1115 391.086 34.2405 416.962 77.1204C442.663 119.709 399.458 179.546 421.269 224.305C443.443 269.808 522.265 270.65 535.166 319.687Z" stroke="url(#paint0_linear_0_558)" strokeOpacity="0.2" strokeWidth="1.72076"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_558" x1="699.955" y1="-11.6777" x2="-171.91" y2="336.054" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFBEC3"/>
                                <stop offset="1" stopColor="#BE1622"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        
                        <div className='svg-container svg-container4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="525" height="584" viewBox="0 0 525 584" fill="none">
                            <path opacity="0.75" fillRule="evenodd" clipRule="evenodd" d="M517.784 292.917C535.149 336.692 507.313 389.386 478.13 425.998C450.525 460.63 399.702 461.574 363.417 486.58C325.894 512.439 305.254 561.522 261.903 575.011C215.436 589.469 164.108 581.251 119.046 562.617C71.8731 543.111 8.40564 518.699 1.59398 467.371C-6.27458 408.079 83.2705 373.177 85.976 313.428C88.2727 262.708 -11.2198 225.893 14.4968 182.421C41.2109 137.263 126.244 208.32 167.223 176.086C214.884 138.594 181.894 37.8831 235.015 8.95675C278.804 -14.8877 339.915 25.5676 370.836 65.2112C401.547 104.586 365.973 169.607 393.088 211.623C420.654 254.339 498.989 245.539 517.784 292.917Z" stroke="url(#paint0_linear_0_557)" strokeOpacity="0.2" strokeWidth="1.72076"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_557" x1="640.867" y1="-58.0494" x2="-184.063" y2="391.966" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFBEC3"/>
                                <stop offset="1" stopColor="#BE1622"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        
                        <div className='svg-container svg-container5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="528" height="591" viewBox="0 0 528 591" fill="none">
                            <path opacity="0.666667" fillRule="evenodd" clipRule="evenodd" d="M516.674 261.613C539.288 303.199 518.131 359.185 493.661 399.281C470.515 437.208 420.184 444.331 387.24 473.705C353.172 504.081 338.714 555.587 297.341 574.323C252.994 594.406 201.038 592.444 154.02 579.323C104.8 565.587 38.8041 548.936 25.7376 498.527C10.6437 440.297 95.238 394.568 90.5837 334.596C86.6328 283.686 -16.6451 259.035 3.54077 212.513C24.5096 164.186 117.641 224.778 154.357 187.617C197.06 144.396 151.942 47.8748 201.117 12.5401C241.652 -16.5869 307.28 16.3658 342.842 52.1794C378.162 87.7498 350.839 156.982 382.915 195.627C415.524 234.914 492.198 216.604 516.674 261.613Z" stroke="url(#paint0_linear_0_556)" strokeOpacity="0.2" strokeWidth="1.72076"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_556" x1="595.731" y1="-103.699" x2="-170.277" y2="442.366" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFBEC3"/>
                                <stop offset="1" stopColor="#BE1622"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        
                        <div className='svg-container svg-container6'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="535" height="593" viewBox="0 0 535 593" fill="none">
                            <path opacity="0.583333" fillRule="evenodd" clipRule="evenodd" d="M518.277 227.752C545.865 266.518 531.774 324.948 512.432 367.923C494.136 408.572 445.046 421.767 415.965 455.066C385.893 489.5 377.899 542.65 339.138 566.352C297.589 591.757 245.763 596.083 197.462 588.675C146.899 580.92 79.3204 572.284 60.1223 523.558C37.9454 467.271 116.285 411.405 104.258 352.117C94.0482 301.789 -11.5329 289.679 2.76267 240.81C17.6128 190.045 117.559 239.25 149.422 197.725C186.481 149.427 129.767 58.5589 174.225 17.3489C210.872 -16.6212 280.099 8.32732 319.828 39.7672C359.288 70.9936 340.711 143.389 377.33 178.076C414.557 213.34 488.419 185.795 518.277 227.752Z" stroke="url(#paint0_linear_0_555)" strokeOpacity="0.2" strokeWidth="1.72076"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_555" x1="551.653" y1="-146.379" x2="-144.266" y2="488.098" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFBEC3"/>
                                <stop offset="1" stopColor="#BE1622"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        
                        <div className='svg-container svg-container7'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="537" height="593" viewBox="0 0 537 593" fill="none">
                            <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M512.033 192.376C544.243 227.727 537.497 287.71 523.618 332.907C510.489 375.659 463.37 394.731 438.618 431.448C413.022 469.418 411.677 523.4 376.12 551.709C338.006 582.054 287.068 592.607 238.176 591.031C186.995 589.38 118.803 588.9 93.6902 542.604C64.6807 489.125 135.557 423.965 116.256 366.271C99.8712 317.295 -6.49523 317.922 1.64012 267.452C10.091 215.024 115.464 252.079 141.958 206.82C172.773 154.18 105.17 70.3607 144.213 23.9004C176.397 -14.3976 248.249 2.15724 291.609 28.7381C334.675 55.1384 325.206 129.593 365.879 159.787C407.229 190.484 477.172 154.115 512.033 192.376Z" stroke="url(#paint0_linear_0_554)" strokeOpacity="0.2" strokeWidth="1.72076"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_554" x1="498.764" y1="-184.856" x2="-116.879" y2="529.098" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFBEC3"/>
                                <stop offset="1" stopColor="#BE1622"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>
                        
                        <div className='svg-container svg-container8'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="534" height="591" viewBox="0 0 534 591" fill="none">
                            <path opacity="0.416667" fillRule="evenodd" clipRule="evenodd" d="M499.388 155.599C535.797 186.982 536.563 247.595 528.399 294.322C520.677 338.52 476.229 363.185 456.205 402.76C435.498 443.686 440.884 497.668 409.074 530.156C374.979 564.98 325.675 581.61 276.895 585.901C225.83 590.392 158.007 598.09 127.287 554.943C91.8005 505.102 154.117 431.639 127.753 376.431C105.373 329.566 -0.246649 342.946 1.55281 291.651C3.42206 238.366 112.746 262.675 133.438 214.375C157.504 158.197 79.8894 82.7339 112.901 31.7309C140.114 -10.3118 213.575 -2.4219 259.973 18.8804C306.055 40.038 305.918 115.405 350.095 140.633C395.007 166.28 459.981 121.633 499.388 155.599Z" stroke="url(#paint0_linear_0_553)" strokeOpacity="0.2" strokeWidth="1.72076"/>
                            <defs>
                                <linearGradient id="paint0_linear_0_553" x1="439.227" y1="-218.915" x2="-87.0868" y2="564.411" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFBEC3"/>
                                <stop offset="1" stopColor="#BE1622"/>
                                </linearGradient>
                            </defs>
                            </svg>
                        </div>




                    </div>
                    
                </div>

                <div className='circular-layer'>
                    <div className='img-container'>
                        <img src={ circular } alt='circular-bussness-image'></img>
                    </div>
                </div>

                <div className='hero-texts-container'>

                    <div className='hero-bold-text'>
                        We help you discover the joy of performance once again
                    </div>

                    <div className='hero-sm-text'>
                        Differentiate your business through enhance delivery using our software
                    </div>
                    <div className='hero-sm-text2'>
                        Allegro contributes to the overall running of the day to day activities in 
                        your company. Differentiate your business through enhance delivery using our software
                    </div>

                    <div className='hero-btn-container'>
                        <div>
                            <button className='c-t-a-btn'>Explore us</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
export default Hero;