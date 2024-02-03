/* eslint-disable react/prop-types */
function Cart(props){
    return(
        <div className="cart">
            <h1>
                {props.num}
            </h1>
            <p>
                {props.about}
            </p>
        </div>
    )
}
export default Cart;