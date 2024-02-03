import './styles.scss'
//images
import reishi from '../../../assets/images/none.svg'

function AboutCompany(){
    return(
        <div className='about-company-container'>
            <div className='section-1'>
                <h3>
                    ABOUT COMPANY
                </h3>

                <h1>
                    ABOUT US
                </h1>

                <p>
                     We know how large objects will act, 
                    but things on a small scale
                </p>

                <button>
                    Get Quote Now
                </button>
            </div>

            <div className='section-2'>
                <img src={reishi} alt="" />
            </div>
        </div>
    )
}
export default AboutCompany;