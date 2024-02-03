import './styles.scss';
import Cart from './cart'

import BodySpray from '../../../assets/images/printed-summer-dress (4) 1.svg'
function BestSellerProd(){
    return(
        <div className='bestSellerProd-container'>
            <h1 className='bestSellerProd-container-title'>
                BESTSELLER PRODUCTS
            </h1>
            <div className='cart-container'>
            <Cart 
                title='Body Spray'
                info='Make up'
                imageSrc={BodySpray}
                price='$6.48'
            />
            <Cart 
                title='Body Spray'
                info='Make up'
                imageSrc={BodySpray}
                price='$6.48'
            />
            <Cart 
                title='Body Spray'
                info='Make up'
                imageSrc={BodySpray}
                price='$6.48'
            />
            <Cart 
                title='Body Spray'
                info='Make up'
                imageSrc={BodySpray}
                price='$6.48'
            />
            <Cart 
                title='Body Spray'
                info='Make up'
                imageSrc={BodySpray}
                price='$6.48'
            />
            <Cart 
                title='Body Spray'
                info='Make up'
                imageSrc={BodySpray}
                price='$6.48'
            />
            <Cart 
                title='Body Spray'
                info='Make up'
                imageSrc={BodySpray}
                price='$6.48'
            />
            <Cart 
                title='Body Spray'
                info='Make up'
                imageSrc={BodySpray}
                price='$6.48'
            />
            </div>
            
            
        </div>
        
    )
}
export default BestSellerProd;