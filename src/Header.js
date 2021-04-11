import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
  Link
} from "react-router-dom";

function Header({ cartItems, user, signOut }) {
  const getCount = () => {
    let count = 0;
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });
    return count;
  }

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src="https://imgur.com/NetLSoh.png" />
        </Link>
      </HeaderLogo>
      <Hr />
      <HeaderOptionAddress>
        <LocationOnIcon />
        <HeaderOption>
          <OptionLineOne>Hello,</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>
      <HeaderSearch>
        <HeaderSearchInput type='text' />
        <HeaderSearchIconContainer>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption onClick={signOut}>
          <OptionLineOne>Hello, {user.name}</OptionLineOne>
          <OptionLineTwo>Log Out</OptionLineTwo>
        </HeaderOption>

        <EndHeaderOptions>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>

          <HeaderOptionCart>
            <Link to="/cart">
              <ShoppingBasketIcon />
              <CartCount>{getCount()}</CartCount>
            </Link>
          </HeaderOptionCart>
        </EndHeaderOptions>

      </HeaderNavItems>
    </Container>
  )
}

export default Header

const Container = styled.div`
    height: fit-content;
    background-color: white;
    display: flex;
    flex-direction: column;
    color: black;
    justify-content: space-between;
    margin: 10px;
    padding: 30px;
    border-radius: 50px;
    @media (max-width: 750px) {
    width: 100%;
    overflow: visible;
    margin: 0;
    border-radius: 0;
  }
`


const HeaderLogo = styled.div`
    align-self: center;
    img {
        width: 150px;
        margin-left: 11px;
    }
`

const Hr = styled.hr`
    border: none;
    background-color: lightgray;
    height: 2px;
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div`

`

const OptionLineTwo = styled.div`
    font-weight: 700;
`

const HeaderSearch = styled.div`
    display: flex;
    height: 40px;
    border-radius: 4px;
    margin-left: 4px;
    background-color: white;
    :focus-within {
                    box-shadow: 0 0 0 3px #85f8ef;
    }
`

const HeaderSearchIconContainer = styled.div`
    background-color: #85f8ef;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderSearchInput = styled.input`
    flex-grow: 1;
    border: 2px solid lightgray;
    :focus {
                    outline: none;
    }
`

const HeaderNavItems = styled.div`
    display: flex;
    flex-direction: column;
`

const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
    cursor: pointer;
`

const EndHeaderOptions = styled.div`
    display: flex;
    justify-content: space-between;
`

const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    a {
                    display: flex;
        color: black;
        text-decoration: none;
        transition: color .3s ease-in-out;
        :hover {
            color: #85f8ef;
        }
    }
`

const CartCount = styled.div`
    padding-right: 5px;
    padding-left: 3px;
    font-weight: 700;
    color: black;
`