import TheBlog from '../components/blogPage/theBlog'
import { useEffect } from 'react';
function Blog(){
    useEffect(() => {
        // Səhifə yeniləndikdə və ya navigasiya zamanı yuxarıya scroll et
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
            <TheBlog/>
        </>
    )
}
export default Blog;