import React from 'react';

import { MdShoppingBasket } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import { Container, Content, Cart } from './styles';

function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <Cart to="/cart">
          <div>
            <strong>Meu Carrinho</strong>
            <span>5 itens</span>
          </div>
          <MdShoppingBasket size={36} color="#000" />
        </Cart>
      </Content>
    </Container>
  );
}

export default Header;
