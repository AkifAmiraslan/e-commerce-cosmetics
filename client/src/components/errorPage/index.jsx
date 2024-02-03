import { Link } from 'react-router-dom'
import './styles.scss'
//images
import arrowRight from '../../assets/images/icn arrow-right .icn-xs.svg'
import arrowRightGreen from '../../assets/images/icn arrow-right light-green icn-xs.svg'
import arrowLeft from '../../assets/images/icn arrow-left .icn-xs.svg'
import brokenRobot from '../../assets/images/oops-404-error-with-a-broken-robot.svg'
function Errorpage(){
    
    return(
        <div className='error-page-container'>
            <div className='title'>
                <h1>404</h1>
                <p>
                    Home
                    <img src={arrowRight} alt="" />
                    404
                </p>
            </div>

            <div className='main-container'>
                <div className='section-1'>
                    <img src={brokenRobot} alt="" />
                </div>

                <div className='section-2'>
                    <p className='oops'>Oops...</p>
                    <p className='info-error'>
                        We can’t seem to find the page you’re looking for.
                    </p>
                    <Link to='/' className='home-link-button'>
                        <button className='home-btn'>
                            <img src={arrowLeft} alt="" />  Back to Home
                        </button>
                    </Link>
                </div>

                <div className="section-3">
                    <h1>
                        Are you looking for...
                    </h1>
                    <div className="links">
                        <ul>
                            <Link to='/' className='link'>
                                <img src={arrowRightGreen} alt="" /> 
                                Home
                            </Link>
                            <Link to='/blog' className='link'>
                                <img src={arrowRightGreen} alt="" /> 
                                Blog
                            </Link>
                            <Link to='/contact' className='link'>
                                <img src={arrowRightGreen} alt="" /> 
                                Contact
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Errorpage;