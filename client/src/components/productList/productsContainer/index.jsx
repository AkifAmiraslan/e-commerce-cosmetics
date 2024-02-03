import { useState} from 'react';
import { Link } from "react-router-dom";
import './styles.scss';
import Product from './cart';

import viewIcon1 from '../../../assets/images/view-icon-1.svg';
import viewIcon2 from '../../../assets/images/view-icon-2.svg';
import arrowBottom from '../../../assets/images/arrow-bottom.svg';
import productImg from '../../../assets/images/random-product-page.png';

function ProductsContainer() {

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
            productName: 'Moisturizing Serum 1',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 5,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 2',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 6,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 3',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 7,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 1',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 8,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 2',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },
        {
            id: 9,
            imgUrl: productImg,
            productName: 'Moisturizing Serum 3',
            categoryName: 'Body Spray',
            oldPrice: '$16.48',
            newPrice: '$6.48',
        },

    ];

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = productsData.slice(indexOfFirstProduct, indexOfLastProduct);
    console.log(currentProducts)
    
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(productsData.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePageClick = (pageNumber) => {
        
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return (
        <div className="products-container">
            <div className="products-container-header">
                <div className="products-count">
                    Showing all {productsData.length} results
                </div>

                <div className="products-views">
                    Views:
                    <button>
                        <img src={viewIcon1} alt="" />
                    </button>
                    <button>
                        <img src={viewIcon2} alt="" />
                    </button>
                </div>

                <div className='products-filter'>
                    <button className='filter-choices'>
                        Popularity
                        <img src={arrowBottom} alt="" />
                    </button>

                    <button className='filter-btn'>
                        Filter
                    </button>
                </div>
            </div>

            <div className='products'>
                {currentProducts.map((product, index) => (
                    <Link  to={`/product/${product.id}`} key={index}>
                        <Product
                        imgUrl={product.imgUrl}
                        productName={product.productName}
                        categoryName={product.categoryName}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        />
                    </Link>
                    
                ))}
            </div>

            <div className='products-pages'>
                <button
                    className='previous-btn'
                    onClick={() => handlePageClick(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        className={`numbers ${number === currentPage ? 'active' : ''}`}
                        onClick={() => handlePageClick(number)}
                    >
                        {number}
                    </button>
                ))}
                <button
                    className='next-btn'
                    onClick={() => handlePageClick(currentPage + 1)}
                    disabled={currentPage === pageNumbers.length}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default ProductsContainer;
