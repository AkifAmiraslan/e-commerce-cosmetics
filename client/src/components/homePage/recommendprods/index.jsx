import './styles.scss'
import Section from './section'

import blue from '../../../assets/images/unsplash_Qyc13QBGaM4.svg'
import orange from '../../../assets/images/unsplash_4oWSXdeAS2g.svg'
function RecommendProds(){
    return(
        <div className='recommend-prods-container'>
            <Section
                about="Ends Today"
                title="Elements Style"
                link="Explore items"
                backgroundImage={blue}
            />

            <Section
                about="Your Space"
                title="Unique Life"
                link="Explore items"
                backgroundImage={orange}
            />
        </div>  
    )
}
export default RecommendProds;