import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import AnnouncemntBanner from "../components/AnnouncementBanner"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
 padding: 20px;
 ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
 font-weight: 300;
 text-align: center;
`

const Top = styled.div`
 display: flex;
 align-items: center; 
 justify-content: space-between;
 padding: 20px;
`

const TopButton = styled.button`
 padding: 10px;
 font-weight: 600; 
 cursor: pointer;
 border: ${props => props.type === "filled" && "none"};
 background-color: ${props => props.type === "filled" ? "black" : "transparent"};
 color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div``

const TopText = styled.span`
 text-decoration: underline;
 cursor: pointer;
 margin: 0px 10px;
 ${mobile({ display: "none" })}
`

const Bottom = styled.div`
 display: flex; 
 justify-content: space-between;
 ${mobile({ flexDirection: "column" })}
`


const Info = styled.div`
 flex: 3;
`

const Product = styled.div`
 display: flex;
 justify-content: space-around;
  ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
 flex:2;
 display: flex;
`

const PriceDetail = styled.div`
 flex: 1; 
 display: flex;   
 flex-direction: column;
 align-items: center;
 justify-content: center;
`

const Image = styled.img`
 width: 200px;
`

const Details = styled.div`
 padding:20px; 
 display: flex; 
 flex-direction: column;
 justify-content: space-between;
 `


const ProductName = styled.div``


const ProductSize = styled.div``


const ProductColour = styled.div`
 width: 20px; 
 height: 20px; 
 border-radius: 50%;
 background-color: ${props => props.color};
 `


const ProductId = styled.div``


const ProductAmountContainer = styled.div`
 display: flex; 
 align-items: center;
 margin-bottom: 20px;
 `


const ProductAmount = styled.div`
 font-size: 24px;
 margin: 5px;
  ${mobile({ margin: "5px 15px" })}
 `


const ProductPrice = styled.div`
 font-size: 30px; 
 font-weight: 200;
 ${mobile({ marginBottom: "20px" })}
 `

const Hr = styled.hr``

const Button = styled.button`
 width: 100%; 
 padding: 10px; 
 border: none;
 background-color: black; 
 color: white; 
 font-weight: 600;
`


 const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px; 
  padding: 20px;
  height: 50vh;
 `
 const SummaryTitle = styled.h1`
  font-weight: 200;
 `


 const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
 `

 const SummaryItemText = styled.span``

 const SummaryItemPrice = styled.span``




const Cart = () => {
    return (
        <Container>
            <Navbar/>
            <AnnouncemntBanner/>
            <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
            <Info>
            <Product>
            <ProductDetail>
            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
            <Details>
            <ProductName><strong>Product:</strong>THUNDER SHOES</ProductName>
            <ProductId><strong>ID:</strong>900393022</ProductId>
            <ProductColour color="black"/>
            <ProductSize><strong>Size:</strong>37.5</ProductSize>
            </Details>
            </ProductDetail>
            <PriceDetail>
             <ProductAmountContainer>
             <Add/>
             <ProductAmount>2</ProductAmount>
             <Remove/>
             </ProductAmountContainer>
             <ProductPrice>Ugx.10,000</ProductPrice>
            </PriceDetail>
            </Product>
            <Hr/>
            <Product>
            <ProductDetail>
            <Image src="https://www.pngall.com/wp-content/uploads/12/Jumper-PNG-Image.png"/>
            <Details>
            <ProductName><strong>Product:</strong>JUMPER</ProductName>
            <ProductId><strong>ID:</strong>900393022</ProductId>
            <ProductColour color="darkblue"/>
            <ProductSize><strong>Size:</strong>M</ProductSize>
            </Details>
            </ProductDetail>
            <PriceDetail>
             <ProductAmountContainer>
             <Add/>
             <ProductAmount>2</ProductAmount>
             <Remove/>
             </ProductAmountContainer>
             <ProductPrice>Ugx.15,000</ProductPrice>
            </PriceDetail>
            </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>Ugx.25,000</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>Ugx.2,000</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>Ugx. - 2,000</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total</SummaryItemText>
                    <SummaryItemPrice>Ugx. 25,000</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
            </Bottom>
            </Wrapper>
            <Footer/>
            
            
        </Container>
    )
}

export default Cart
