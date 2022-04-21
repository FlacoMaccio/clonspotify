import styled from 'styled-components'

const BodyContainer =  styled.div `
flex: 0.8;
background: linear-gradient(#084594, #000);
color: #fff;
height: 100vh;
padding: 30px;
overflow: overlay;
& ::-webkit-scrollbar{
    display: none;
}
`
const HeaderContainer = styled.div `
display: flex;
justify-content: space-between;
margin-bottom:35px;
`

const HeaderLeft= styled.div `
display: flex;
flex: 0.5;
min-width: 75px;
background-color: #fff;
color: #181818;
border-radius: 30px;
padding: 10px;
align-items: center;
& input {
    border: none;
    width: 100%;
    
}
`
const HeaderRight = styled.div `
display: flex;
align-items: center;
& h4 {
    margin-left: 15px;
}
`
const Info = styled.div`
display: flex;
align-items: flex-end;
padding: 10px;
& img{
    width: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px #000;

}
`
const InfoText = styled.div`
flex: 1;
& h2 {
    margin-bottom:  10px;
}
`
const Songs = styled.div `
margin: 20px;
`

const Icons =  styled.div `
display: flex;
align-items: center;
& .MuiSvgIcon-root {
    margin-right: 20px;
}
`

const SongRowContainer = styled.div`
display: flex;
margin-left:  25px;
z-index: 90;
color: #fff;
align-items: center;
& :hover {
    cursor: pointer;
    background-color: #000000;
    opacity: 0.8;
}
& img{
    margin-right:10px;
    margin-top: 10px;
    height: 50px;
    width: 50px;
    object-fit: contain;
}

`
const SongInfo = styled.div `
    margin-left: 25px;
    & p {
        margin-top: 4px;
        color: lightgray;
    }
`





export {BodyContainer, HeaderContainer, HeaderRight, HeaderLeft, 
    Info, InfoText, Songs, Icons, SongRowContainer, SongInfo}