import React from 'react';
import styled from 'styled-components';
import { db } from './firebase'

function Product({ title, price, rating, image, id }) {

    const addToCart = () => {
        alert('Item added to cart');
        console.log(id);
        const cartItem = db.collection("cartitems").doc(id);
        cartItem.get()
            .then((doc) => {
                console.log(doc);
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                } else {
                    db.collection("cartitems").doc(id).set({
                        name: title,
                        image: image,
                        price: price,
                        quantity: 1
                    })
                }
            })
    }

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                ${price}
            </Price>
            <Rating>
                {
                    Array(rating)
                        .fill()
                        .map(rating => <p>⭐️</p>)
                }
            </Rating>
            <Image src={image} />
            <ActionSection>
                <AddToCartButton
                    onClick={addToCart}
                >
                    Add to Cart
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    position: relative;
    background: white;
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
const Rating = styled.div`
    display: flex;
`
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
    cursor: pointer;
`

const ActionSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
`