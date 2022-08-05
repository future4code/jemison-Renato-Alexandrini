import React from "react";






function CardPerfis(props){
    const{profile} = props
    return(
        <div>
            <img src={profile.photo} alt='Foto'/>
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p>
        </div>
    )
}

export default CardPerfis