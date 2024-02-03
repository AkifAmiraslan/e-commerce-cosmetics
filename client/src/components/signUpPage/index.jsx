import './styles.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
//images
import facebook from '../../assets/images/facebook-light-white.svg'

function SignUpPage(){
    useEffect(() => {
        // Səhifə yeniləndikdə və ya navigasiya zamanı yuxarıya scroll et
        window.scrollTo(0, 0);
      }, []);
    return(
        <div className="sign-up-page-container">
            <div className="title">
                <h1>
                    Sign up for free
                </h1>
                <p>
                    Try everything free for 30 days, no payment 
                    details required
                </p>
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

                <div className='register'>
                    <div className='name'>
                        <h5>Name *</h5>
                        <input type="text" placeholder='Full Name * '/>
                    </div>

                    <div className='email'>
                        <h5>Email address *</h5>
                        <input type="email" placeholder='example@gmail.com  '/>
                    </div>

                    <div className='password'>
                        <h5>Password *</h5>
                        <input type="password" placeholder='Password'/>
                    </div>

                    <button className='get-started-btn'>Get Started</button>

                    <p className='about-button'>
                        By filling in the form above and clicking the “Get Started” button, you 
                        accept and agree to Terms of Service and Privacy Policy.
                    </p>

                    <div className='sign-in-link'>
                        Already have an account?
                        <Link to='/signIn' className='link'>Sign In</Link>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default SignUpPage;