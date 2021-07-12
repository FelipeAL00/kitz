import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
  height: 100%;
  max-height: 75px;
  color: #000;
  display :flex;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  border-bottom: 2px solid yellow;
  max-width: 1000px;
  width: 100%;
  margin-top: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  img{
    max-width: 50px;
    width: 100%;
    margin: 13px;

    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  transition: all 0.2s;
  margin-right: 10px;
  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #000;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
