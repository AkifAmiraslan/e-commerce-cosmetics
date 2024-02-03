import './styles.scss'
import Cart from './cart'

//images
import goodBoy from '../../../assets/images/team-1-user-3.jpg'
function MeetOurTeam(){
    return(
        <div className="meet-our-team-container">
            <div className="title">
                <h1>
                    Meet Our Team
                </h1>
                <p>
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </div>

            <div className="carts-container">
                <Cart
                    imgSrc={goodBoy}
                    username='Username'
                    profession='Profession'
                />
                <Cart
                    imgSrc={goodBoy}
                    username='Username'
                    profession='Profession'
                />
                <Cart
                    imgSrc={goodBoy}
                    username='Username'
                    profession='Profession'
                />
            </div>
        </div>
    )
}
export default MeetOurTeam;