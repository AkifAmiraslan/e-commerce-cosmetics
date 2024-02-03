import './styles.scss'
//images
import leftGirl from '../../../assets/images/unsplash_Lks7vei-eAg.png'
import rightUp1 from '../../../assets/images/unsplash_gMsnXqILjp4.png'
import rightUp2 from '../../../assets/images/unsplash_PSmDDeXaEWE.png'
import rightDown1 from '../../../assets/images/unsplash_1-aA2Fadydc.png'
import rightDown2 from '../../../assets/images/unsplash_mcSDtbWXUZU.png'
import iconRight from '../../../assets/images/icn arrow-right .icn-xs.svg'
function WhatWeDo(){
    return(
        <div className="what-we-do-container">
            <div className='section-1'>
                <h3>
                    WHAT WE DO
                </h3>
                <h1>
                    Innovation tailored for you
                </h1>
                <p>
                    Home 
                    <img src={iconRight} alt="" />
                    Team
                </p>
            </div>

            <div className='section-2'>
                <div className='left'>
                    <img src={leftGirl} alt="" />
                </div>
                <div className='right'>
                    <div className='right-1'>
                        <img src={rightUp1} alt="" />
                        <img src={rightDown1} alt="" />
                    </div>
                        
                    <div className='right-2'>
                        <img src={rightUp2} alt="" />
                        <img src={rightDown2} alt="" />
                    </div>
                        
                    
                </div>
            </div>      
            

        </div>
    )
}
export default WhatWeDo;