import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/authActions';
import {emptyFavItems} from '../../redux/actions/favoriteActions';
import {deleteAllFromCart} from '../../redux/actions/shopActions';


const Logout = (props) => {

    useEffect(()=>{
        props.emptyFavorites();
        props.emptyCart();
        props.userLogout();
    }, []);

    return (
        <>
            <Redirect to={{ pathname: "/", state: {from: props.location} }}/>
        </>
    );
}

const mapStateToProps = state => ({
    auth: state.auth
});
const mapDispatchToProps = dispatch => ({
    emptyFavorites: () => dispatch(emptyFavItems()),
    emptyCart: () => dispatch(deleteAllFromCart()),
    userLogout: ()=> dispatch(logout())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
