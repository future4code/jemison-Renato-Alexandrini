import styled from "styled-components";

export const Header = styled.header`
display:flex;
`;

export const HomePageButton = styled.button`
margin: 0px;
border:none;
background-color:white;
`;

export const ImgHomeButton = styled.img`
margin-left:-13px;
width:60px;

`;

export const HeaderImage = styled.img`
margin-top:-35px;
margin-bottom:-70px;
padding: 0px;
width: 280px;
height:150px;
`;

export const MatchesButton = styled.button`
margin: 0px;
border:none;
background-color:white;
`;
export const ImgMatchesButton = styled.img`
width:80px;
:hover{
 box-shadow: inset 0 0 1em #FF277E, 0 0 1em #FF277E;
  border-radius:100px; 
}
`;

export const PrincipalCard = styled.div`
margin-left:40vw;
`;


export const AlignButtons = styled.div`
display: flex;
border: 5px solid;
border-color:#FF277E;
border-radius:20px;
width: 400px;
justify-content:space-around;
margin-top: 6px;
`;

export const LikeButton = styled.button`
border:none;
background-color:white;
`;
export const ImgLike = styled.img`
width: 80px;
:hover{
 box-shadow: inset 0 0 1em green, 0 0 1em green;
  border-radius:100px; 
}
`;

export const DislikeButton = styled.button`
border:none;
background-color: white;
`;
export const ImgDislike = styled.img`
width: 80px;
:hover{
 box-shadow: inset 0 0 1em red, 0 0 1em red;
  border-radius:100px; 
}
`;

export const ClearButton = styled.button`
border:none;
background-color: white;
`;
export const ImgClear = styled.img`
width: 81px;
:hover{
 box-shadow: inset 0 0 1em blue, 0 0 1em blue;
  border-radius:100px; 
}
`;

