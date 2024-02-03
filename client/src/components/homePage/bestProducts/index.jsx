import './styles.scss'


// images 
import bubly from '../../../assets/images/hero-4-png-picture.svg'


function BestProducts (){
  return (
    <div className='best-products'>

      <div className='best-products-info'>
        <h1>SUMMER 2020</h1>
        <p className='huge-text'>
          Make Your Skin Shine & Fresh
        </p>
        <p className='huge-text-mobile'>
          Best Selling Products
        </p>

        <p className='small-text'>
          We know how large objects will act, 
          but things on a small scale.
        </p>
        

        <button className='btn'>Read More</button>
      </div>
      
      <div className='best-products-img'>
        <img src={bubly} alt="" />
      </div>

    </div>
  )
}
export default BestProducts;
