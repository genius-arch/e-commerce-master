import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons"
import AnnouncementBanner from '../components/AnnouncementBanner'
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import { mobile } from "../responsive"

const Container = styled.div``

const Wrapper = styled.div`
 padding: 50px; 
 display: flex;
 ${mobile({ flexDirection: "column" , padding: "10px"})}
`

const InfoWrapper = styled.div`
 flex:1;
 padding: 0px 50px;
 ${mobile({ padding: "10px" })}
`

const ImgContainer = styled.div`
 flex:1;
`

const Title = styled.h1`
  font-weight: 200;
`

const Image = styled.img`
 width: 100%;
 height: 90vh; 
 object-fit: cover;
 ${mobile({ height: "40vh" })}
`

const Description = styled.p`
 margin: 20px 0px;
`

const Price = styled.span`
 font-weight: 100; 
 font-size: 40px;
`
const FilterContainer = styled.div`
 width: 50%;
 margin: 30px 0px;
 display: flex; 
 justify-content: space-between;
 ${mobile({ width: "100%" })}
`
const Filter = styled.div`
 display: flex; 
 align-items: center;
`

const FilterTitle = styled.span`
 font-size: 20px; 
 font-weight: 200;
`


const FilterColour = styled.div`
 width: 20px; 
 height: 20px;
 border-radius: 50%;  
 background-color: ${props=> props.color};
 margin: 0px 5px;
 cursor: pointer;
`


const FilterSize = styled.select`
 margin-left: 10px; 
 padding: 5px;
`


const FilterSizeOption = styled.option``


const AddContainer = styled.div`
 width: 50%;
 display: flex; 
 align-items: center; 
 justify-content:space-between;
 ${mobile({ width: "100%" })}
`


const AmountContainer = styled.div`
 display: flex; 
 align-items:center; 
 font-weight: 700;
`


const Amount = styled.span`
 width: 30px; 
 height: 30px; 
 border-radius: 10px; 
 border: 1px solid teal;
 display: flex;
 align-items:center;
 justify-content: center;
 margin: 0px 5px;
`

const Button = styled.button`
 padding: 15px;
 border: 1.5px solid teal; 
 background-color: white; 
 cursor: pointer;
 font-weight: 500;

 &:hover{
     background-color:#f8f4f4;
 }
`




const SingleProduct = () => {
    return (
        <Container>
            <Navbar/>
            <AnnouncementBanner/>
            <Wrapper>
                <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
                </ImgContainer>

                <InfoWrapper>
                    <Title>Product</Title>
                    <Description>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in, totam qui quos sequi deserunt id! Minus corporis fugiat doloribus cum incidunt omnis suscipit nobis soluta molestias delectus? Labore, ut!
                    </Description>
                    <Price>Ugx. 20,000</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Colour</FilterTitle>
                            <FilterColour color="black"/>
                            <FilterColour color="darkblue"/>
                            <FilterColour color="grey"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoWrapper>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default SingleProduct
