import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    padding: 20px;
    width: 60%;
    background-color: white;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border: none;
    border-bottom: 2px solid #A7ABAE;

    &:hover{
        border-bottom: 3px solid black;
    }
`;
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`;
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    font-weight: 700;
    background-color: black;
    color: white;
    cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            
            <Form>
                <Title>Criar Conta</Title>
                <Input placeholder='nome' />
                <Input placeholder='Sobrenome' />
                <Input placeholder='e-mail' />
                <Input placeholder='senha' />
                <Input placeholder='confirmar senha' />
                <Agreement>
                Ao criar uma conta, concordo com o tratamento dos meus dados pessoais de acordo com a <b>POLÍTICA DE PRIVACIDADE</b>
                </Agreement>
                <Button>Criar</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register