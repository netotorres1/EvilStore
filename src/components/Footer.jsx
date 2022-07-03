import React from 'react'
import styled from 'styled-components'
import { FiFacebook, FiInstagram, FiTwitter, FiMap, FiPhone, FiMail} from 'react-icons/fi';

const Container = styled.div`
    display: flex;
`;

const Left = styled.div`
    flex: 1;
    displpay: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`

`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>EVIL</Logo>
            <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Desc>
            <SocialContainer>
                <SocialIcon color='3b5999'>
                    <FiFacebook/>
                </SocialIcon>
                <SocialIcon color='e4405f'>
                    <FiInstagram/>
                </SocialIcon>
                <SocialIcon color='55acee'>
                    <FiTwitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Acessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
              <FiMap style={{marginRight: '10px'}} />  622 Dixie Path, South Tobinchester 98336
            </ContactItem>
            <ContactItem>
              <FiPhone style={{marginRight: '10px'}} />  +1 234 56 789
            </ContactItem>
            <ContactItem>
               <FiMail style={{marginRight: '10px'}} /> contact@lama.dev
            </ContactItem>
        </Right>
    </Container>
  )
}

export default Footer