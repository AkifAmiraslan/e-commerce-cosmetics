import { Link } from 'react-router-dom'
import { useState } from 'react';
import './styles.scss'
//?images
import callIcn from '../../../assets/images/call icn.svg'
import letterIcn from '../../../assets/images/letter icn.svg'
import instagram from '../../../assets/images/ant-design_instagram-outlined.svg'
import youtube from '../../../assets/images/youtube icn.svg'
import facebook from '../../../assets/images/ant-design_facebook-filled.svg'
import twitter from '../../../assets/images/ant-design_twitter-outlined.svg'
import loginIcn from '../../../assets/images/icn login.svg'
import searchİcn from '../../../assets/images/icn search product.svg'
import cartIcn from '../../../assets/images/icn cart product.svg'
import likesIcn from '../../../assets/images/icn likes product.svg'
import menu from '../../../assets/images/icn menu .icn-xs.svg'
function HeaderProduct(){
    const handleIconClick = (link) => {
        window.open(link, '_blank'); // Yeni pəncərədə aç
    };
    
        const [isMenuOpen, setIsMenuOpen] = useState(false);
      
        const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
        }
    
    return (
        <div className="header-product-container">

            <div className="follow-us">

                <div className='call-mail-section'>
                    <div className='call-section'>
                        <img src={callIcn} alt="" />
                        (225) 555-0118
                    </div>
                    <div className='mail-section'>
                        <img src={letterIcn} alt="" />
                        michelle.rivera@example.com
                    </div>
                </div>

                <div className='title-section'>
                    Follow Us  and get a chance to win 80% off
                </div>

                <div className='social-media-section'>
                    Follow Us  :
                    <div className='icons-container'>
                        <img src={instagram} alt="" className='insta' onClick={() => handleIconClick('https://www.instagram.com')}/>
                        <img src={youtube} alt="" onClick={() => handleIconClick('https://www.youtube.com')}/>
                        <img src={facebook} alt="" onClick={() => handleIconClick('https://www.facebook.com')}/>
                        <img src={twitter} alt="" onClick={() => handleIconClick('https://www.twitter.com')}/>
                    </div>
                    
                </div>

            </div>

            <div className="header-product">
                <div className='logo-menu-container'>
                    <h3 className='logo'>
                        Lovely
                    </h3>

                    <div className='menu' onClick={toggleMenu}>
                    {isMenuOpen ? 'X' : <img src={menu} alt="Menyu" />}
                    </div>
                </div>
                
                <div className={`links ${isMenuOpen ? 'show-links' : ''}`}>
                    <Link to='/' target="_blank" className='link'>
                        Home
                    </Link>
                    
                    <Link to='/productList' className='link'>
                        Shop
                    </Link>
                    
                    <Link to='/about' target='_blank' className='link'>
                        About
                    </Link>

                    <Link to='/blog' target='_blank' className='link'>
                        Blog
                    </Link>

                    <Link to='/contact' target='_blank' className='link'>
                        Contact
                    </Link>
                    
                    <Link className='link'>
                        Pages
                    </Link>
                    
                </div>
                
                


                <div className={`shop-main-container ${isMenuOpen ? 'show-shop' : ''}`}>
                    <Link className='login-register' target="_blank" to='/signIn'>
                        <img src={loginIcn} alt="" />
                        <div>Login</div>
                        /
                        <div>Register</div>
                    </Link>

                    <div className='shop-about'>
                        <div className="search-section">
                            <img src={searchİcn} alt="" />
                        </div>

                        <div className="cart-section">
                            <img src={cartIcn} alt="" />
                        </div>

                        <div className="likes-section">
                            <img src={likesIcn} alt="" />
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    )
}
export default HeaderProduct;
