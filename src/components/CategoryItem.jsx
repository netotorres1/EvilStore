import styled from "styled-components"

const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 500px;
  margin: 3px;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const Button = styled.button`
  border: 1px solid white;
  padding: 15px;
  background-color: transparent;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;

  &:hover{
    background-color: rgba(255,255,255, 0.2);
  }
`;

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>COMPRE AGORA</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem