import React from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'
import styled from 'styled-components'
import Announcement from '../components/Annoucement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import {mobile} from '../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: '10px'})};
`;

const Top = styled.h1`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'filled' && 'none'};
    backgrund-color: ${(props) => props.type === 'filled' ? 'black' : 'transparent'};
    color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
    ${mobile({display: 'none'})};
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Title = styled.div`
    font-weight: 300;
    text-align: center;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})};
`;

const Info = styled.div`
    flex: 3;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: 'column'})};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height:20px;
    border-radius: 50%;
    background-color: ${props => props.color}
`;

const ProductSize = styled.span`

`;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({flexDirection: 'column'})};
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: '5px 15px'})};
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: '20px'})};
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 300;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    justify-content: space-between;
    font-weight: ${props => props.type === 'Total' && '500'};
    font-size: ${props => props.type === 'Total' && '24px'};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.span`
    width: 100%;
    padding: 10px;
    background-color: black;
    font-weight: 600;
    color: white;
`;

const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton><Link to={'/'}>Continuar Comprando</Link></TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type='filled'>CHECK OUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src='https://keydesign.vteximg.com.br/arquivos/ids/196162-638-638/Camiseta-Basica-Com-Bolso---Branca-638-638.jpg?v=637172072326670000' />
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b> 123456789</ProductId>
                                <ProductColor color='black' />
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <FiArrowUp />
                                <ProductAmount>2</ProductAmount>
                                <FiArrowDown />
                            </ProductAmountContainer>
                            <ProductPrice>
                                $30
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetail>
                            <Image src='https://images.tcdn.com.br/img/img_prod/497460/camiseta_o_grito_282_3_20190314163301.jpeg' />
                            <Details>
                                <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                                <ProductId><b>ID:</b> 123456789</ProductId>
                                <ProductColor color='black' />
                                <ProductSize><b>Size:</b> 37.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                                <FiArrowUp />
                                <ProductAmount>2</ProductAmount>
                                <FiArrowDown />
                            </ProductAmountContainer>
                            <ProductPrice>
                                $30
                            </ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMARRY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>SubTotal</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type='total'>
                        <SummaryItemText >Total</SummaryItemText>
                        <SummaryItemPrice>$ 80</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart
