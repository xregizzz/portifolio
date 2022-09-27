import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --purple: #623CEA;
    --dark-purple: #311E75;
    --grey-4: #212529;
    --grey-3: #868E96;
    --grey-2: #E9ECEF;
    --grey-1: #F8F9FA;
    --white: #FFFFFF;
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Inter', sans-serif;
    font-weight: 700;
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}
`;
