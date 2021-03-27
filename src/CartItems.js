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
    background: hsla(176, 49%, 84%, 1);

background: linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 100%, 1) 70%);

background: -moz-linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 100%, 1) 70%);

background: -webkit-linear-gradient(135deg, hsla(176, 49%, 84%, 1) 0%, hsla(0, 0%, 100%, 1) 70%);

filter: progid: DXImageTransform.Microsoft.gradient( startColorstr="#C2EAE7", endColorstr="#FBFBFB", GradientType=1 );
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
    border-radius: 4px;
`

const Title = styled.div`
    margin-bottom: 8px;
`
const ItemsContainer = styled.div`
    
`