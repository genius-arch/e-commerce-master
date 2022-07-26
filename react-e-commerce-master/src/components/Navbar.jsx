import styled from 'styled-components'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import {mobile} from '../responsive'

const NavbarContainer = styled.div`
 height: 60px;
 ${mobile({height: "50px"})}
`


const Wrapper = styled.div`
 padding: 10px 20px; 
 display: flex;
 align-items: center;
 justify-content:space-between;
  ${mobile({padding: "10px 0px"})}
`

const Language = styled.div`
font-size: 14px;
cursor: pointer;
 ${mobile({display: "none"})}
`
const Left = styled.div`
flex: 1;
display:flex;
align-items: center;
`

const Center = styled.div`
flex: 1;
text-align: center;
`

const Right = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
 ${mobile({flex:2, justifyContent: 'center'})}
`
const SearchContainer = styled.div`
 border: 1px solid lightgray; 
 display: flex;
 align-items: center;
 margin-left: 25px;  
 padding: 5px;
`
const Input = styled.input`
border: none;
outline: none;
 ${mobile({width: "50px"})}
`
const WordLogo = styled.h1`
font-weight: bold;
 ${mobile({fontSize: "20px"})}
`
const MenuItem = styled.div` 
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
 margin-right: 25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`


const Navbar = () => {
    return (
        <NavbarContainer>
            <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder="search"/>
                    <Search style={{color: "grey", fontSize: "16px"}}/>
                </SearchContainer>
            </Left>
            <Center>
                <WordLogo>E-store</WordLogo>
                </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <Badge badgeContent={4} color="primary"></Badge>
                <ShoppingCartOutlined/>
            </Right>
            </Wrapper>
        </NavbarContainer>
    )
}

export default Navbar