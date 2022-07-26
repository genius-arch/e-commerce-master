import styled from "styled-components"
import { Facebook, Instagram, Mail, Phone, Room, Twitter } from "@material-ui/icons"
import { mobile } from "../responsive"


const FooterWrapper = styled.div``

const Container = styled.div`
 display: flex;
  ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
 flex:1;
 display: flex; 
 flex-direction: column;
 padding: 20px;
`

const Logo = styled.h1``
const Description = styled.p`
 margin: 20px 0px; 
`
const SocialContainer = styled.div`
 display: flex;
`
const SocialIcon = styled.div`
 width:40px; 
 height: 40px; 
 cursor: pointer;
`


const Center = styled.div`
 flex:1;
 padding: 20px;
`
const Title = styled.h3`
 margin-bottom: 30px;
`

const List = styled.ul`
 margin: 0; 
 padding: 0; 
 list-style: none; 
 display: flex; 
 flex-wrap: wrap;
`

const ListItem = styled.li`
 width: 50%;
 margin-bottom: 10px;
`

const Right = styled.div`
 flex:1;
 padding: 20px;
`
const ContactItem = styled.div`
 margin-bottom: 20px;
 display: flex; 
 align-items: center;
`

const Payment = styled.img`
 width: 50%;
`

const CopyrightText = styled.p`
    text-align: center;
    margin-bottom: 10px;
`

const Footer = () => {
    return (
        <FooterWrapper>
            
        <Container>
            <Left>
                <Logo>E-Store</Logo>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum, amet alias saepe vitae iure aspernatur magni ea hic debitis ducimus at soluta, temporibus non odit! Quia harum id nisi.
                </Description>
                <SocialContainer>
                    <SocialIcon>
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon>
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon>
                        <Twitter/>
                    </SocialIcon>
                </SocialContainer>
                
            </Left>
            <Center>

                <Title>Resource links</Title>
                <List>
                    <ListItem>Lorem</ListItem>
                    <ListItem>Lorem</ListItem>
                    <ListItem>Lorem</ListItem>
                    <ListItem>Lorem</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/>
                    223, Lorem street, south town.
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/>
                    +256 8900 0099
                </ContactItem>
                <ContactItem>
                    <Mail style={{marginRight:"10px"}}/>
                    contact@e-store.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
            <CopyrightText>
                &copy; {new Date().getFullYear()}
            </CopyrightText>
        </FooterWrapper>
    )
}

export default Footer
