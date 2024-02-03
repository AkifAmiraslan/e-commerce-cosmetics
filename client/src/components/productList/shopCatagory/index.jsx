import './styles.scss'
import Category from './cart'
import arrowRight from '../../../assets/images/icn arrow-right .icn-xs.svg'
import makeUp1 from '../../../assets/images/make up bcg.png'
import skinCare from '../../../assets/images/skin care bcg.png'
import bodySpray from '../../../assets/images/body spray bcg.png'
import spa from '../../../assets/images/spa bcg.png'
import makeUp2 from '../../../assets/images/make up 2 bcg.png'

function ShopCatagory(){
    return(
        
        <div className="shop-category-container">
            <div className="title">
                <div className="word">
                    Shop
                </div>

                <div className="address">
                    Home 
                    <img src={arrowRight} alt="" />
                    Shop
                </div>
            </div>

            <div className='categories-container'>
                <Category
                    backgroundImage={makeUp1}
                    categoryName='Make Up'
                    countItems='5 items'
                />
                <Category
                    backgroundImage={skinCare}
                    categoryName='Skin Care'
                    countItems='5 items'
                />
                <Category
                    backgroundImage={bodySpray}
                    categoryName='Body Spray'
                    countItems='5 items'
                />
                <Category
                    backgroundImage={spa}
                    categoryName='Spa'
                    countItems='5 items'
                />
                <Category
                    backgroundImage={makeUp2}
                    categoryName='Make Up '
                    countItems='5 items'
                />

            </div>
        </div>
    )
}
export default ShopCatagory;