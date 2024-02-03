/* eslint-disable react/prop-types */
import './styles.scss';
function Cart(props){
    return(
        <div className="cart">
            <img src={props.imgSrc} alt="" />
            <p>{props.gmail1}</p>
            <p>{props.gmail2}</p>
            <div className="submit-container">
                <h3>{props.submitTitle}</h3>
                <button>Submit Request</button>
            </div>
        </div>
    )
}
export default Cart;