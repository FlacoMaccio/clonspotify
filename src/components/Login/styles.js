import styles from 'styled-components'

const LoginContainer = styles.div`
display: grid;
place-items: center;
height: 100vh;
background-color: #000;
& img {
    width: 100%;
}
`
const LoginButton = styles.a`
padding: 20px;
background-color: #1db954;
color: #fff;
border-radius: 90px;
text-decoration: none;
text-transform: uppercase;
font-weight: bolder;

`

export {LoginButton, LoginContainer}
