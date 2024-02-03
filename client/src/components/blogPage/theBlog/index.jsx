import './styles.scss'
import Cart from './cart'
import goodGirlBlog from '../../../assets/images/good-girl-blog.png'
//images
import arrowRight from '../../../assets/images/icn arrow-right .icn-xs.svg'
function TheBlog(){
    return(
        <div className="the-blog-container">
            <div className="title">
                <h5>LEARN WITH US</h5>
                <h1>The Blog</h1>
                <p>Home <img src={arrowRight} alt="" />Blog</p>
            </div>

            <div className="carts-container">
                <Cart
                    imgSrc={goodGirlBlog}
                />
            </div>      
        </div>
    )
}
export default TheBlog;