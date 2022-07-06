import styled from 'styled-components';
import { useState } from 'react';
import {FiArrowLeft, FiArrowRight} from 'react-icons/fi';
import { sliderItems } from '../data';
import {mobile} from '../responsive';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: 'none'})};
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vh);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    width: 100vh;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    height: 80%;
`;

const InfoContainer = styled.div`
    margin: 30px;
    flex: 1;
`;

const Title = styled.h1`
    font-size: 70px;

`;

const Desc= styled.p`
    margin: 50px 0px;
    font-size: 15px;    
    font-weight: 500;
    letter-spacing: 2px;
`;

const Button = styled.button`
    padding 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = () => {
  
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1: 0)
        }
    };

    return (

    <Container>
        <Arrow direction='left' onClick={() => handleClick('left')}>
            <FiArrowLeft/>
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map(item => {
                return(
                    <Slide bg={item.bg}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>Confira</Button>
                        </InfoContainer>
                    </Slide>
                )})}
        </Wrapper>

        <Arrow direction='right' onClick={() => handleClick('right')}>
            <FiArrowRight />
        </Arrow>
    </Container>
  )
}

export default Slider