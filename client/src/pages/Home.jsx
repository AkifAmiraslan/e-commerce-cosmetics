import BestProducts from '../components/homePage/bestProducts'
import JobSecurity from '../components/homePage/jobSecurity'
import BestSellerProd from '../components/homePage/bestSellerProd'
import RecommendProds from '../components/homePage/recommendprods'
import BestSellerProd2 from '../components/homePage/bestSellerProd2'
import RecommendProds2 from '../components/homePage/recommendprods2'
import { useEffect } from 'react';
function Home(){
    useEffect(() => {
        // Səhifə yeniləndikdə və ya navigasiya zamanı yuxarıya scroll et
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <BestProducts/>
            <JobSecurity/>
            <BestSellerProd/>
            <RecommendProds/>
            <BestSellerProd2/>
            <RecommendProds2/>
        </>
    )
}
export default Home;