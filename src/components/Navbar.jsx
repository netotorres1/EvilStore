import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {mobile} from '../responsive';

import { FiShoppingCart ,FiSearch} from 'react-icons/fi';

const Container = styled.div`
    height: 60px;
    ${mobile({height: '60px'})};
`;

const Wrapper = styled.div`
    padding 10px 20px;
    display: flex;
    justify-content: space-between;    
    align-items: center;
    ${mobile({padding: '10px 0px'})};
`;

const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14;
    cursor: pointer;
    ${mobile({display: 'none'})};
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
    ${mobile({width: '50px'})};
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: '24px'})};
`;

const Center = styled.div`
    flex: 1;
`;
const Right = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({flex: 2, justifyContent: 'center'})};
`;

const MenuItem = styled.div`
    font-size:14;
    cursor: pointer;
    margin-left:25px;
    ${mobile({fontSize: '12px', marginLeft: '10px'})};
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
                    <Input placeholder='Buscar'/>
                    <FiSearch size={25}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo><Link to={'/'}>EVIL</Link></Logo>
            </Center>
            <Right>
                <MenuItem>
                <Link to={'/register'}>Crie uma conta</Link> 
                </MenuItem>
                <MenuItem>
                <Link to={'/login'}>Entrar </Link> 
                </MenuItem>
                <MenuItem>

                <Link to={'/cart'}><FiShoppingCart size={25}/></Link>    
                </MenuItem>
            </Right>
        </Wrapper>    
    </Container>
  )
}

export default Navbar