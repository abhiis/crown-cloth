import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
const CartDropdown = ({ cartItems, history, dispatch, total }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { 
                cartItems.length?
                (cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem}/>)) )
                :
                (<span className='empty-message'>Your cart is empty!</span>)
            }
            </div>
            {
                total?
                <span className='total'>Cart Value : ${total} </span>
                :
                null
            }
            
            {
                cartItems.length?
                ( 
                    <CustomButton onClick={() => {
                        history.push('./checkout');
                        dispatch(toggleCartHidden())
                    }}
                        >Go to Checkout</CustomButton>
                ) : ( null )
            }
            </div>
       
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
