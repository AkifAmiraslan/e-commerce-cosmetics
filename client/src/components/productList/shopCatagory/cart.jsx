/* eslint-disable react/prop-types */
function Category(props){
    
    return(
        <div className="category">
            <img src={props.backgroundImage} alt="" />
            <div className="category-info">
                <div className="category-name">
                    {props.categoryName}
                </div>
                <div className="count-items">
                    {props.countItems}
                </div>
            </div>
            
        </div>
    )
}
export default Category;