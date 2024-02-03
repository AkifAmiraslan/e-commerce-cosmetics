import './styles.scss'
import './section'
// images
import facebook from '../../../assets/images/ant-design_facebook-filled.svg'
import instagram from '../../../assets/images/ant-design_instagram-outlined.svg'
import twitter from '../../../assets/images/ant-design_twitter-outlined.svg'
import Section from './section'
function Footer(){
    return(
        <div className='footer-container'>
            <div className='section-1'>
                <h3>
                    Lovely
                </h3>

                <form>
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                    <img src={twitter} alt="" />
                </form>
            </div>

            <div className='section-2'>
                <Section
                    title='Company Info'
                    info1='About Us'
                    info2='Carrier'
                    info3='We are hiring'
                    info4='Blog'
                />
                <Section
                    title='Legal'
                    info1='About Us'
                    info2='Carrier'
                    info3='We are hiring'
                    info4='Blog'
                />
                <Section
                    title='Features'
                    info1='Business Marketing'
                    info2='User Analytic'
                    info3='We are hiring'
                    info4='Unlimited Support'
                />
                <Section
                    title='Resources'
                    info1='IOS & Android'
                    info2='Watch a Demo'
                    info3='Customers'
                    info4='API'
                />
                <div className='section-email'>
                    <h3>
                        Get In Touch
                    </h3>
                    <form>
                        <input 
                            type="email"
                            placeholder="Your Email"
                        />
                        <button>Subscribe</button>
                    </form>
                    <p className='info'>
                        Lore imp sum dolor Amit
                    </p>
                    

                </div>

            </div>

            <div className='section-3'>
                <p>Made With Love By Finland All Right Reserved </p>
            </div>
        </div>
    )
}
export default Footer;