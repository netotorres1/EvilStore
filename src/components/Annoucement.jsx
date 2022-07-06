import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: rgb(40,40,40);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500px;
`;


const Announcement = () => {
  return (
    <Container>
        Fretes grátis acima de R$300.
    </Container>
  )
}

export default Announcement