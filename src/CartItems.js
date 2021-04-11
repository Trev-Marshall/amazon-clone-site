import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function CartItems({ cartItems }) {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr />
      <ItemsContainer>
        {
          cartItems.map((item) => (
            <CartItem
              id={item.id}
              item={item.product}
            />
          ))
        }
      </ItemsContainer>
    </Container>
  )
}

export default CartItems

const Container = styled.div`
    height: 100%;
    background: white;
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
    border-radius: 4px;
    @media (max-width: 1080px) {
      margin: 0;
    }
`

const Title = styled.div`
    margin-bottom: 8px;
`
const ItemsContainer = styled.div`
    
`