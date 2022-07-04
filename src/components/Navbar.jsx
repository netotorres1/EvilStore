import React from 'react';
import styled from 'styled-components';

import { FiShoppingCart ,FiSearch} from 'react-icons/fi';

const Container = styled.div`
    height: 60px;
    @media only screen and (max-width: 380px){
        display: none;
    };
`;

const Wrapper = styled.div`
    padding 10px 20px;
    display: flex;
    justify-content: space-between;    
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`;

const Input = styled.input`
    border:none;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
`;

const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size:14;
    cursor: pointer;
    margin-left:25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    pt-BR
                </Language>
                <SearchContainer>
                    <Input/>
                    <FiSearch size={25}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>EVIL</Logo>
            </Center>
            <Right>
                <MenuItem>
                    REGISTER
                </MenuItem>
                <MenuItem>
                    SIGN IN 
                </MenuItem>
                <MenuItem>
                    <FiShoppingCart size={25}/>
                </MenuItem>
            </Right>
        </Wrapper>    
    </Container>
  )
}

export default Navbar