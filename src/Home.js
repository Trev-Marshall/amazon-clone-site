import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import ProductRow from './ProductRow';
import { db } from './firebase';

function Home() {
    const [products, setProducts] = useState([]);
    const [productsTwo, setProductsTwo] = useState([]);

    const getProductsTwo = () => {
        db.collection('productsTwo').onSnapshot((snapshot) => {
            let tempProducts = [];

            tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    productsTwo: doc.data()
                }
            ));
            setProductsTwo(tempProducts);
        })
    }

    const getProducts = () => {
        db.collection('products').onSnapshot((snapshot) => {
            let tempProducts = [];

            tempProducts = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
        })
    }

    useEffect(() => {
        getProducts();
        getProductsTwo();
    }, []);

    return (
        <Container>
            <Banner>
                <BannerText>
                    AMAZON FIRE TV
                </BannerText>
                <BannerTextTwo>
                    Streaming media player with 4K Ultra HD and Alexa Voice Remote.
                </BannerTextTwo>
            </Banner>
            <Content>
                {
                    products.map((data) => (
                        <Product
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            id={data.id}
                        />
                    ))
                }
            </Content>
            <ContentTwo>
                {
                    productsTwo.map((data) => (
                        <ProductRow
                            title={data.productsTwo.name}
                            price={data.productsTwo.price}
                            rating={data.productsTwo.rating}
                            image={data.productsTwo.image}
                            id={data.id}
                        />
                    ))
                }
            </ContentTwo>
        </Container>
    )
}

export default Home;


const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://imgur.com/RcIHUHF.jpg');
    background-image: src();
    min-height: 300px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,.1));
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    color: white;

`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -20px;
    display: flex;
`

const BannerText = styled.h1`
    font-size: 3em;
`

const BannerTextTwo = styled.h3`

`

const ContentTwo = styled.div`
    display: flex;
    justify-content: space-around;
`