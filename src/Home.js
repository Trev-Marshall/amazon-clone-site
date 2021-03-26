import React from 'react';
import styled from 'styled-components';
import Product from './Product';

function Home() {
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
                <Product />
                <Product />
            </Content>
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