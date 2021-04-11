import React from 'react'
import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({ cartItems }) {

  const getSubtotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += (item.product.price * item.product.quantity);
    })
    return total;
  }

  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  }

  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal getSubtotal={getSubtotal} getCount={getCount} />
    </Container>
  )
}

export default Cart

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 14px 18px 0 18px;
`