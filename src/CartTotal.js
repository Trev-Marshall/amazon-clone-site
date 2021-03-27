import React from 'react'
import styled from 'styled-components';

function CartTotal() {
    return (
        <Container>
            Cart total
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