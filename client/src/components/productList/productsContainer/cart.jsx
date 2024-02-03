/* eslint-disable react/prop-types */
function Product(props){
    return(
        <div className="product">
            <img src={props.imgUrl} alt="" />
            <div className="product-info">
                <h5 className="product-name">
                    {props.productName}
                </h5>

                <h5 className="category-name">
                    {props.categoryName}
                </h5>

                <div className="prices">
                    <p className="old-price">
                        {props.oldPrice}
                    </p>

                    <p className="new-price">
                        {props.newPrice}
                    </p>
                </div>
                
                
            </div>
            

        </div>
    )
}
export default Product;