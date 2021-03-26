import React from 'react';
import styled from 'styled-components';

function Product() {
    return (
        <Container>
            <Title>
                Ipad pro
            </Title>
            <Price>
                $1449
            </Price>
            <Rating>
                ⭐️⭐️⭐️⭐️⭐️
            </Rating>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX342_.jpg' />
            <ActionSection>
                <AddToCartButton>
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    position: relative;
    background: rgb(204,200,218);
    background: linear-gradient(0deg, rgba(204,200,218,1) 0%, rgba(255,255,255,1) 73%);
    z-index: 10;
    flex: 1;
    padding: 20px;
    max-height: 400px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
`

const Title = styled.span``
const Price = styled.span`
    margin-top: 3px;
    font-weight: 500;
`
const Rating = styled.div``
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
    transition: transform .3s ease-in-out;
    :hover {
        transform: scale(1.05);
    }
`
const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a99734;
    border-radius: 2px;
`

const ActionSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
`