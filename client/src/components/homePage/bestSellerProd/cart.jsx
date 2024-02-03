/* eslint-disable react/prop-types */
import './styles.scss';
function Cart(props){
    return(
        <div className='cart'>
            <h1>
                {props.title}
            </h1>
            <p className='cart-info'> 
                {props.info}
            </p>

            <img src={props.imageSrc} alt="" />

            <p className='cart-price'>
                {props.price}
            </p>
        </div>
        

    )
}
export default Cart;