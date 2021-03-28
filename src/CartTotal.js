import React from 'react'
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

function CartTotal({ getCount, getSubtotal }) {
    return (
        <Container>
            <Subtotal>Subtotal ({getCount()} items): <NumberFormat value={getSubtotal()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></Subtotal>
            <CheckoutButton>Proceed to checkout</CheckoutButton>
        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    height: 200px;
    flex: 0.2;
    padding: 20px;
    background: hsla(176, 49%, 84%, 1);

background: linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 98%, 1) 100%);

background: -moz-linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 98%, 1) 100%);

background: -webkit-linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 98%, 1) 100%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C2EAE7", endColorstr="#FBFBFB", GradientType=1 );
text-align: right; // put in component later
font-weight: 700; // put in component later
`

const Subtotal = styled.h2`

`
const CheckoutButton = styled.button`
    background-color: #85f8ef;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid grey;
    border-radius: 3px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        opacity: .8;
    }

`