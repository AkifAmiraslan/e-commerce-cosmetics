import { useState } from 'react';
import './styles.scss';
import arrowleft from "../../../assets/images/icn arrow-left .icn-xs.svg";
import arrowright from "../../../assets/images/icn arrow-right .icn-xs.svg";
import prodImg from '../../../assets/images/product-cover-5.svg';
import Cart from './cart';

function BestSellerProd2() {
    // Sizin əlavə etdiyiniz hissə - Başlangıc
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const itemsPerPage = 4;
    const totalItems = 8;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const renderedCarts = Array.from(Array(itemsPerPage), (_, index) => {
        const cartIndex = (currentPage - 1) * itemsPerPage + index;
        return cartIndex < totalItems ? {
            imgSrc: prodImg,
            title: 'Cream Contour',
            kind: 'Make Up',
            oldPrice: '$16.48',
            newPrice: '$6.48'
        } : null;
    });
    // Sizin əlavə etdiyiniz hissə - Son

    return (
        <div className="best-seller-prod2-container">
            <div className="best-seller-prod2-header">
                <h1>BESTSELLER PRODUCTS</h1>
                <div className="kinds">
                    <h5>Men</h5>
                    <h5>Women</h5>
                    <h5>Accessories</h5>
                </div>
                <div className="btns">
                    {/* Sizin əlavə etdiyiniz hissə - Başlangıc */}
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <img src={arrowleft} alt="icon" />
                    </button>
                    <span className="current-page">{currentPage}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <img src={arrowright} alt="icon" />
                    </button>
                    {/* Sizin əlavə etdiyiniz hissə - Son */}
                </div>
            </div>

            <div className="carts-container">
                {renderedCarts.map((cart, index) => cart && (
                    <Cart key={index} {...cart} />
                ))}
            </div>
        </div>
    );
}

export default BestSellerProd2;
