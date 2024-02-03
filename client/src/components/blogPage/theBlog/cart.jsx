/* eslint-disable react/prop-types */
import './styles.scss';
//images
import timeIcon from '../../../assets/images/icon cool-icon-1.svg'
import chartIcom from '../../../assets/images/icon ant-design-area-chart-outlined.svg'
import arrowRight from '../../../assets/images/icn arrow-right .icn-xs.svg'
function Cart(props){
    return(
        <div className="cart">
            <img src={props.imgSrc} alt="" />
            <div className="cart-status">
                <p>Google</p>
                <p>Trending</p>
                <p>New</p>
            </div>
            <h1 className="cart-title"> 
                {props.title}
            </h1>
            <p>
                {props.paragraph}
            </p>
            <div className='time-chart'>
                <div className='time'>
                    <img src={timeIcon} alt="" />
                    <p>{props.time}</p>
                </div>
                <div className='chart'>
                    <img src={chartIcom} alt="" />
                    <p>{props.comments}</p>
                </div>
            </div>
            <div>
                Learn more 
                <img src={arrowRight} alt="" />
            </div>
        </div>
    )
}
export default Cart;