import {createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

/* stylo p todos os elementos */
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

/* stylos que vao ser aplicados no html no body e no root*/

html,body,#root{
    height: 100%;
}
`