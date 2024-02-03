/* eslint-disable react/prop-types */
import './styles.scss';
//images 
import facebook from '../../../assets/images/ant-design_facebook-filled.svg'
import instagram from '../../../assets/images/ant-design_instagram-outlined.svg'
import twitter from '../../../assets/images/ant-design_twitter-outlined.svg'
function Cart(props){
    return(
        <div className="cart">
            <img src={props.imgSrc} alt="" className='goodBoy'/>
            <h1>{props.username}</h1>
            <p>{props.profession}</p>   

            <div className="social-medias">
                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={twitter} alt="" />
            </div>
        </div>
    )
}
export default Cart;