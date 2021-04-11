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
    height: fit-content;
    flex: 0.2;
    padding: 25px;
    background: white;
    text-align: right;
    font-weight: 700;
    border-radius: 50px;
    @media (max-width: 1080px) {
      border-radius: 0;
    }
`

const Subtotal = styled.h3`

`
const CheckoutButton = styled.button`
    background-color: #85f8ef;
    width: 100%;
    padding: 4px 8px;
    border: 2px solid grey;
    border-radius: 15px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
    :hover {
        opacity: .8;
    }

`