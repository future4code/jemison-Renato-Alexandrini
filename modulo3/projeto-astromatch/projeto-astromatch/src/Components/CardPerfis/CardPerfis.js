import React from "react";
import { Card, Descricao, Nome, Foto, Idade } from "./CardPerfisStyled";

function CardPerfis(props){
    const{profile} = props
    return(
        <Card>
            <Foto src={profile.photo} alt='Foto'/>
            <Nome>{profile.name}</Nome>
            <Idade>{profile.age}</Idade>
            <Descricao>{profile.bio}</Descricao>
        </Card>
    )
}

export default CardPerfis