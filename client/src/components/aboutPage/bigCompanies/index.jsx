import './styles.scss'
//images
import hooli from '../../../assets/images/fa-brands-1.svg'
import lyft from '../../../assets/images/fa-brands-2.svg'
import leaf from '../../../assets/images/fa-brands-3.svg'
import stripe from '../../../assets/images/fa-brands-4.svg'
import aws from '../../../assets/images/fa-brands-5.svg'
import git from '../../../assets/images/fa-brands-6.svg'
function BigCompanies(){
    return(
        <div className="big-companies-container">
            
            <div className='title'>
                <h1>
                    Big Companies Are Here
                </h1>
                <p>
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics 
                </p>
            </div>
            <div className='logo-container'>
                <img src={hooli} alt="" />
                <img src={lyft} alt="" />
                <img src={leaf} alt="" />
                <img src={stripe} alt="" />
                <img src={aws} alt="" />
                <img src={git} alt="" />
            </div>

        </div>
    )
}
export default BigCompanies;