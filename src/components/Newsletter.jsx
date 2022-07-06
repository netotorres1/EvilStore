import React from 'react'
import { FiSend} from 'react-icons/fi';
import styled from 'styled-components';

const Container = styled.div`
    height: 60vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size: 70px;
    font-weight: 300;   
    margin-bottom: 20px;
`;
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid black;
`;
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: black;
    color: white;

`;

const Newsletter = () => {
  return (
    <Container>
        <Title>receba as novidades</Title>
        <Description>Deixe seu e-mail e receba as novidades antes de todos!</Description>
        <InputContainer>
            <Input placeholder='Seu e-mail' />
            <Button>
                <FiSend size={20}/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter