import {Routes, Route} from 'react-router-dom';
import ShopCategory from "./routes/shop-category/shop-category.component";
import Navigation from "./routes/navigation/navigation.component";
import Cart from "./routes/checkout/checkout.component";
import Home from "./routes/home/home.component";
import Footer from './routes/footer/footer.component';
import SignUpForm from './routes/signup-form/signup-form.component';
import SignInForm from './routes/signin-form/signin-form.component';
import SignOut from './routes/signout/signout.component';
import Payment from './routes/payment/payment.component';
import { useEffect } from 'react';
import { fetchCategoriesStartAsync } from './store/categories/category.action';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from './store/categories/category.selector';
import Checkout from './routes/checkout/checkout.component';
const App = () => {
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStartAsync());
    }, []);

    const categoryMap = useSelector(selectCategories);

  return (
    <Routes>
      <Route path ='/' element  = {<><Navigation/></>}>
        <Route index element = {<><Home/>
            <ShopCategory key= 'tops'  categoryTitle='tops'/>
            <ShopCategory key= 'bottom'  categoryTitle='bottoms'/>
            <ShopCategory categoryTitle='dresses'/>
            <ShopCategory categoryTitle='accessories'/>
          </> } />
        <Route path = 'cart' element = {<Cart />} />
        <Route path = 'signin' element = {<SignInForm/>} />
        <Route path = 'signup' element = {<SignUpForm/>} />
        <Route path = 'tops' element={<ShopCategory key= 'tops'  categoryTitle='tops'/>} />
        <Route path = 'bottoms' element={<ShopCategory key= 'bottom'  categoryTitle='bottoms'/>} />
        <Route path = 'checkout' element = {<Checkout/>}/>
        <Route path = 'checkout/payment' element = {<Payment/>}/>
        <Route path = 'dresses' element={<ShopCategory categoryTitle='dresses'/>} />
        <Route path = 'accessories' element={<ShopCategory categoryTitle='accessories'/>} />
      </Route>
      <Route path = 'signout' element = {<SignOut/>} />


    </Routes>
  )
}
export default App;
