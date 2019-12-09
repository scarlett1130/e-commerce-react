import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// User Area
import Login from './pages/auth/Login';
import Logout from './pages/auth/Logout'
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import ChangePassword from './pages/auth/changePassword';
import VerifyCode from './pages/auth/VerifyCode';

// Logged User Profile
import UserProfile from './pages/users/UserProfile';
import Subscription from './pages/users/Subscription';
import OrderPage from './pages/users/OrderPage';
import PaymentPage from './pages/users/PaymentPage';

// Theme Page
import Home from './pages/Home';
import OfferPage from './pages/offerPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import FavoritesPage from './pages/FavoritesPage';
import ShopPage from './pages/ShopPage';
import ProductPage from "./pages/ProductPage";

import PrivateRoute from './components/authComponents/PrivateRoute';
import ErrorPage from './pages/Error404';
import TermConditions from "./pages/terms/TermConditions";
import Privacy from "./pages/terms/Privacy";
import Refunds from "./pages/terms/Refunds";
import DeliveryDetails from "./pages/terms/DeliveryDetails";
import PlaceOrder from "./pages/terms/PlaceOrder";

const Router = (props) => (

    <Switch location={props.location}>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <PrivateRoute path="/profile-settings" component={UserProfile} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/change-password" component={ChangePassword} />
              <Route path="/verify-code" component={VerifyCode} />
              <PrivateRoute path="/email-subscription" component={Subscription} />
              <PrivateRoute path="/my-order" component={OrderPage} />
              <PrivateRoute path="/payment-methods" component={PaymentPage} />
              <Route path="/book-offer" component={OfferPage} />
              <PrivateRoute path="/cart" component={CartPage} />
              <PrivateRoute path="/checkout" component={CheckoutPage} />
              <Route path="/favorites" component={FavoritesPage} />
              <Route path="/shop/category/:id?/:title?" component={ShopPage} />
              <Route exact path="/shop" component={ () => <Redirect to={{ pathname: "/shop/category/all", state: {from: props.location} }}/> } />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/term/conditions" component={TermConditions} />
              <Route path="/privacy" component={Privacy} />
              <Route path="/refunds" component={Refunds} />
              <Route path="/delivery/details" component={DeliveryDetails} />
              <Route path="/place/order" component={PlaceOrder} />

              <Route path='/logout' component={Logout} />
              <Route path='*'  component={ErrorPage} />
    </Switch>
)


export default Router;
