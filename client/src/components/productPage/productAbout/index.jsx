
import productImg from '../../../assets/images/random-product-page.png';
import { useParams } from 'react-router-dom';
function ProductAbout(){
    const productsData = [
        {   
            id: 1,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 1',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 2,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 2',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 3,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 3',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 4,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 4',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 5,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 5',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 6,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 6',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 7,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 7',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 8,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 8',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 9,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 9',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
    
    ];
    const { id } = useParams();
    const selectedProduct = productsData.find(product => product.id === parseInt(id, 10));
    if (!selectedProduct) {
        return <div>Ürün bulunamadı.</div>;
      }
    
    return(
        <div className="product-about-container">
            <div>
                
                <p>Product name: {selectedProduct.productName}</p>
                <p>Category: {selectedProduct.categoryName}</p>
                <p>Old price: {selectedProduct.oldPrice}</p>
                <p>New price: {selectedProduct.newPrice}</p>
            </div>
        </div>
    )
}
export default ProductAbout;