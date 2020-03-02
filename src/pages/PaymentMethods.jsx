import React, {useState, useEffect} from 'react';
import {Form, Accordion , useAccordionToggle, Alert} from 'react-bootstrap';
import {connect} from 'react-redux';
import { setPayment } from '../redux/actions/authActions';
import { deliveryMethod } from '../redux/actions/shopActions';
import PageLoader from "../components/pageLoader/PageLoaderComponent";
import card_icon_img from '../assets/images/user/card_icon_img.png';
import './checkout.css';
import '../assets/css/theme.css'
import defaultMethods from '../inc/PaymentMethods/defaultPaymentMethods.json';
import paypal_icon from './assets/images/paypal.png';
import visa from './assets/images/visa-2.png';
import amex from './assets/images/Amex-icon.jpg'
import master_card from './assets/images/master-card.png'
import './assets/paymentbar.css';


const PaymentMethods = (props) => {

    const [method, setMethod] = useState('');

    const [deliveryMethod, setDeliveryMethod] = useState({
        standard: true,
        express: false
    });

    const [alert, setAlert] = useState({
        status: false,
        type: 'danger',
        message: ''
    });


    const [check,setChecked] = useState({
        paypal:true,
        visa:false,
        amex:false,
        master:false,
    })


    useEffect(()=>{
        props.getDeliveryMethod()
    }, []);



    const checkDelivery = (e) => {

        if(e.target.name === 'standard'){
          setDeliveryMethod({
              standard: true,
              express: false
          })

          props.callback({
                method: method,
                delivery: 1,
                paymentData: props.delivery[0]
          });

        }

        if(e.target.name === 'express') {
            setDeliveryMethod({
                standard: false,
                express: true
            })

            props.callback({
                method: method,
                delivery: 2,
                paymentData: props.delivery[1]
            });
        }
    }


    const paymentMethodSelect = (e) => {
        e.preventDefault();
        switch(e.target.value){
            case 'paypal':
                    setMethod('PAYPAL');
                break;
            case 'visa':
            case 'amex':
            case 'master':
                window.alert('Currently this payment method is not supported!.');
        }
    }

    return (<>
        <PageLoader loading={false} />

       <div className="text-center">
            <input type="radio" className="radio_item" value="paypal" name="item" id="radio1" onChange={()=> setChecked({paypal:!check.paypal})} onClick={paymentMethodSelect} checked={ check.paypal ? true : false }/>
            <label className="label_item" htmlFor="radio1"> <img src={paypal_icon} alt="paypal icon"/></label>
             &nbsp;
             &nbsp;
            <input type="radio" className="radio_item" value="visa" name="item" id="radio2" onChange={()=>setChecked({visa:!check.visa})} onClick={paymentMethodSelect} checked={ check.visa ? true : false } />
            <label className="label_item" htmlFor="radio2"> <img src={visa} alt="visa-icon" /> </label>
             &nbsp;
            &nbsp;
            <input type="radio" className="radio_item" value="amex" name="item" id="radio3" onChange={()=>setChecked({amex:!check.amex})}  onClick={paymentMethodSelect} checked={ check.amex ? true : false }/>
            <label className="label_item" htmlFor="radio3"><img src={amex} alt="american-express" /></label>
             &nbsp;
            &nbsp;
            <input type="radio" className="radio_item" value="master" name="item" id="radio4" onChange={()=>setChecked({master:!check.master})} onClick={paymentMethodSelect} checked={ check.master ? true : false } />
            <label className="label_item" htmlFor="radio4"> <img src={master_card} alt="master-card" /></label>
        </div>

        <h3 className="mt-4 mb-2">Choose a delivery method</h3>

        <div className="payment-header-card mt-3 d-flex justify-content-between">
            <div>
            <Form.Check
                custom
                type="radio"
                className="ml-2"
                label={props.delivery? props.delivery[0].delivery_name.charAt(0).toUpperCase() + props.delivery[0].delivery_name.substring(1) : ''}
                checked={deliveryMethod.standard}
                name="standard"
                id="standard009"
                onChange={checkDelivery}
            />
            </div>
            <div>
                <div className="col text-right shippingCostPrice">
            <span className="shippingCost"><strong>Time:</strong> {props.delivery ? 24*props.delivery[0].delivery_time : 24*7 } hours</span> <span className="shippingPrice pl-3 pr-3"><strong>Price:</strong> Ksh {props.delivery ? props.delivery[0].price : '0'}</span>
                </div>
            </div>
        </div>

        <div className="payment-header-card mt-3 d-flex justify-content-between">
            <div>
            <Form.Check
                custom
                type="radio"
                className="ml-2"
                label={props.delivery ? props.delivery[1].delivery_name.charAt(0).toUpperCase() + props.delivery[1].delivery_name.substring(1) : ''}
                checked={deliveryMethod.express}
                name="express"
                id="express22"
                onChange={checkDelivery}
            />
            </div>
            <div>
                <div className="col text-right shippingCostPrice">
                    <span className="shippingCost"><strong>Time:</strong>
                        {props.delivery ? 24 * props.delivery[1].delivery_time : 24*7} hours
                    </span>
                    <span className="shippingPrice pl-3 pr-3">
                        <strong>Price:</strong> Ksh {props.delivery ? props.delivery[1].price : '0'}
                    </span>
                </div>
            </div>
        </div>
        <div className="mt-3">
            <Alert show={alert.status} variant={alert.type} onClose={() => setAlert({...alert, status: false})} dismissible>
                <p>{alert.message}</p>
            </Alert>
        </div>
    </>);
}
const mapStateToProps = state =>({
    ...state.auth,
    delivery: state.shop.deliveryMethod
})
const mapDispatchToProps = dispatch => ({
    getDeliveryMethod   : () => dispatch(deliveryMethod),
    addCard             : (info) => dispatch(setPayment(info))
})
export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethods);
