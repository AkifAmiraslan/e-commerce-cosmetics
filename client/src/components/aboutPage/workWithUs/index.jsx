import './styles.scss'
//images
import goodGirl from '../../../assets/images/unsplash_vjMgqUkS8q8.png'
function WorkWithUs(){
    return(
        <div className="work-with-us-container">
            <div className="section-1">
                <h3>
                    WORK WITH US
                </h3>
                <h1>
                    Now Let’s grow Yours
                </h1>
                <p>
                    The gradual accumulation of information about atomic and 
                    small-scale behavior during the first quarter of the 20th 
                </p>
                <button>
                    Button
                </button>
            </div>
            <div className="section-2">
                <img src={goodGirl} alt="" />
            </div>
        </div>
    )
}
export default WorkWithUs;