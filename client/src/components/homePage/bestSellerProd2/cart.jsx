/* eslint-disable react/prop-types */
function Cart(props){
    return(
        <div className="cart">
            <img src={props.imgSrc} alt="" />
            <div className="info">
                <h1>{props.title}</h1>
                <p className="kind">{props.kind}</p>

                <div className="prices">
                    <p className="old">{props.oldPrice}</p>
                    <p className="new">{props.newPrice}</p>
                </div>
            </div>
            
            
        </div>
    )
}
export default Cart;