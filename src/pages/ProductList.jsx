import styled from "styled-components";
import Announcement from "../components/Annoucement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div`

`;

const Title = styled.h1`

`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`

`;

const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>PEÇAS</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Cor</Option>
                    <Option>Branco</Option>
                    <Option>Preto</Option>
                    <Option>Vermelho</Option>
                    <Option>Azul</Option>
                    <Option>Amarelo</Option>
                    <Option>Verde</Option>
                </Select>
                <Select>
                    <Option disabled selected>Tamanho</Option>
                    <Option>PP</Option>
                    <Option>P</Option>
                    <Option>M</Option>
                    <Option>G</Option>
                    <Option>GG</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Selecionar Produtos:</FilterText>
                <Select>
                    <Option selected>Mais novos</Option>
                    <Option>Preço (CRESCENTE)</Option>
                    <Option>Preço (DECRESCENTE)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList