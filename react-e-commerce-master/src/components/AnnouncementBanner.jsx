import styled from "styled-components"

const ABanner = styled.div`
 height: 30px;
 background-color: black;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 14px;
 font-weight: 500;
`

const AnnouncemntBanner = () => {
    return (
        <ABanner>
            50% off. Shop now. 
        </ABanner>
    )
}

export default AnnouncemntBanner
