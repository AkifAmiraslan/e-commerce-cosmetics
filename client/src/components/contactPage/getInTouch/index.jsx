import './styles.scss'
//images
import twitter from '../../../assets/images/logos_twitter.svg'
import facebook from '../../../assets/images/logos_facebook.svg'
import insta from '../../../assets/images/logos-insta.svg'
import linkedin from '../../../assets/images/logos_linkedin-icon.svg'
import reishi from '../../../assets/images/none.svg'
function GetInTouch(){
    return(
        <div className="get-in-touch-container">
            <div className="section-1">
                <h5>
                    CONTACT US
                </h5>
                <h1>
                    Get in touch today!
                </h1>
                <p className='about'>
                    We know how large objects will act, 
                    but things on a small scale
                </p>
                <p className='contact-number'>
                    Phone ; +451 215 215 
                </p>
                <p className='contact-number'>
                    Fax : +451 215 215
                </p>
                <div className="social-media-container">
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={insta} alt="" />
                    <img src={linkedin} alt="" />
                </div>
            </div>

            <div className="section-2">
                <img src={reishi} alt="" /> 
            </div>
        </div>
    )
}
export default GetInTouch;