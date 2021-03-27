import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'


function ProductRow({ title, price, rating, image, id }) {

    const addToCart = () => {
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

export default ProductRow

const Container = styled.div`
    background-color: white;
    display: flex;
    margin: 10px;
    flex-direction: column;
    padding: 20px;
    max-height: 400px;
    min-width: 27%;
    margin: 10px;
    border-radius: 4px;
`

const Title = styled.span`
    padding: 3px;`
const Price = styled.span`
    margin-top: -20px;
    font-weight: 500;
    text-align: right;
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