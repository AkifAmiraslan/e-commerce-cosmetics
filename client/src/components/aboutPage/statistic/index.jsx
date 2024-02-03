import Cart from './cart';
import './styles.scss'
function Statistic(){
    return(
        <div className="statistic-container">
            <div className="section-1">
                <Cart
                    num='15K'
                    about='Happy Customers'
                />
                <Cart
                    num='150K'
                    about='Monthly Visitors'
                />
                <Cart
                    num='15'
                    about='Countries Worlwide'
                />
                <Cart
                    num='100+'
                    about='Top Partners'
                />
            </div>

            <div className="section-2">
                
            </div>
        </div>
    )
}
export default Statistic;