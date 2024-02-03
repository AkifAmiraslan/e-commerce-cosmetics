import { useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import Header from "./components/common/header";
import HeaderProduct from "./components/productList/productHeader";
import Footer from "./components/common/footer";
import Store from './redux/store'
import {
  About,
  Home,
  Team,
  Contact,
  Blog,
  SignUp,
  SignIn,
  ErrorPage,
  Example,
  ProductList,
  Product,
} from "./pages";
import { Provider } from "react-redux";
import { getProducts } from "./api/products";


function App() {
  useEffect(() => {
    // Səhifə yeniləndikdə və ya navigasiya zamanı yuxarıya scroll et
    window.scrollTo(0, 0);
    
    async function getAllProducts(){
      const data = await getProducts()
      console.log(data, "aaaa")
    }
    getAllProducts();
  }, []);

  const isProductListPage = window.location.pathname === '/productList';
  const isProductPage = window.location.pathname === '/product'
  const isSignUpPage = window.location.pathname === '/signUp';
  const isSignInPage = window.location.pathname === '/signIn';

  return (
    <>
      <Provider store={Store}>
        {isProductListPage || isProductPage ? <HeaderProduct /> : !isSignUpPage && !isSignInPage && <Header />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/product/:id" element={<Product/>}/>
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {isSignUpPage || isSignInPage ? (
            <>
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/signIn" element={<SignIn />} />
            </>
          ) : null}
          <Route path="/error404" element={<ErrorPage />} />
          <Route path="/example" element={<Example />} />
        </Routes>

        {isProductListPage ? <Footer /> : !isSignUpPage && !isSignInPage && <Footer />}
      </Provider>
    </>
  );
}

export default App;
