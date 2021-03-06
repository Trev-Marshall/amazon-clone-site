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
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 10px 5px 10px rgba(182, 194, 195, .5);
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
    width: 100%;
    height: 50px;
    background: #F2994A;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #F2C94C, #F2994A);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #F2C94C, #F2994A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    border: 2px solid #a99734;
    border-radius: 2px;
    cursor: pointer;
    border-radius: 20px;
    margin: 3px;
    align-self: flex-end;
`

const ActionSection = styled.div`
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
`