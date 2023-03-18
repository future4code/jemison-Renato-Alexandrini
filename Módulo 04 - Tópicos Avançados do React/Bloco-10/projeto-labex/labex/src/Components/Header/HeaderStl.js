import styled from  'styled-components'

export const Main = styled.div`
display: flex;
border: solid 2px black ;
justify-content: space-between;
background-color: #191970;
padding:10px;

`;

export const Logo = styled.img`
width: 50px;
`;

export const LoginImage = styled.img`
width: 50px;
`;
export const LoginName = styled.p`

`;

export const LoginPhotoAndName = styled.div`

`;

export const LoginButton = styled.button`
border: none;
background-color: transparent;
width:200px;
border-radius:80px;
:hover{
box-shadow: inset 0 0 1em white, 0 0 1em white;
}
`;
export const ImgLoginButton = styled.img`
width:100px;

`;

export const LoginButtonAndImage = styled.div`
display: flex;
`;

export const Button = styled.button`
border-radius:20px;
height:95%;
align-self:center;
font-family: calibri;
font-size: 20px;

:hover{
 box-shadow: inset 0 0 1em white, 0 0 1em white;
}
`;