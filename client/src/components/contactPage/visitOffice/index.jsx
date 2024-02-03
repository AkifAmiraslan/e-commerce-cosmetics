import './styles.scss';
import Cart from './cart'
//images
import call from '../../../assets/images/icn settings .icn-xl.svg'
import location from '../../../assets/images/icn settings .icn-xl (1).svg'
import letter from '../../../assets/images/icn settings .icn-xl (2).svg'
function VisitOffice(){
    return(
        <div className="visit-office-container">
            <div className='title'>
                <h4>
                    VISIT OUR OFFICE
                </h4>

                <h1>
                    We help small businesses 
                    with big ideas
                </h1>
            </div>

            <div>
                <div className="cart-container">
                    <Cart
                        imgSrc={call}
                        gmail1='georgia.young@example.com'
                        gmail2='georgia.young@ple.com'
                        submitTitle='Get Support'
                        
                    />
                    <Cart
                        imgSrc={location}
                        gmail1='georgia.young@example.com'
                        gmail2='georgia.young@ple.com'
                        submitTitle='Get Support'
                    />
                    <Cart
                        imgSrc={letter}
                        gmail1='georgia.young@example.com'
                        gmail2='georgia.young@ple.com'
                        submitTitle='Get Support'
                    />
                </div>
            </div>
        </div>
    )
}
export default VisitOffice;