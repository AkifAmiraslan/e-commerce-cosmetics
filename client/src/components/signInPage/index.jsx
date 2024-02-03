import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './styles.scss'
//images
import facebook from '../../assets/images/facebook-light-white.svg'
function SignInPage(){
    useEffect(() => {
        // Səhifə yeniləndikdə və ya navigasiya zamanı yuxarıya scroll et
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="sign-in-page-container">
            <div className="title">
                <h1>
                    Welcome Back
                </h1>
                
            </div>      

            <div className="sign-up">
                <button className='facebook-btn'>
                    <img src={facebook} alt=""/>
                    Facebook
                </button>

                <div className='or-container'>
                    <div className='line'></div>
                    OR
                    <div className='line'></div>
                </div>

            </div>
            <div className='register'>
                <div className='email'>
                    <h5>Email address *</h5>
                    <input type="email" placeholder='example@gmail.com  '/>
                </div>

                <button className='get-started-btn'>Get Started</button>

                <p className='about-button'>
                    By filling in the form above and clicking the “Get Started” button, you 
                    accept and agree to Terms of Service and Privacy Policy.
                </p>

                <div className='sign-up-link'>
                    Do you need an account?
                    <Link to='/signUp' className='link'>Sign Up</Link>
                </div>
            </div>
        </div>
    )
}
export default SignInPage;