import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import styled from "styled-components"
import Announcement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { Link } from "react-router-dom";
import {mobile} from '../responsive';

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: 'column', padding: '10px'})};
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: '40vh'})};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: '10px'})};
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px; 
    display: flex;
    justify-content: space-between;
    ${mobile({width: '100%'})};
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`;
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
     width: 50%;
     display: flex;
     align-items: center;
     justify-content: space-between;
     ${mobile({width: '100%'})};
`;
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid black;
    font-weight: bold;
    background-color: white;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`;


const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://keydesign.vteximg.com.br/arquivos/ids/196162-638-638/Camiseta-Basica-Com-Bolso---Branca-638-638.jpg?v=637172072326670000' />

            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Desc>
                <Price>R$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>
                            Color
                        </FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='darkblue' />
                        <FilterColor color='gray' />
                    </Filter>
                    <Filter>
                        <FilterTitle>
                            Size
                        </FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>P</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>G</FilterSizeOption>
                            <FilterSizeOption>GG</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <FiArrowUp/>
                        <Amount>1</Amount>
                        <FiArrowDown/>
                    </AmountContainer>
                    <Button><Link to={'/cart'}>adicionar ao carrinho</Link></Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product