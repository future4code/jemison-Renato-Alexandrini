import React from "react"
import * as Stl from './CardsTripsStl.js'
import sunImg from '../../Images/Sol.png';
import mercuryImg from '../../Images/Mercurio.png';
import venusImg from '../../Images/Venus.png';
import earthImg from '../../Images/Terra.png';
import marsImg from '../../Images/Marte.png';
import jupiterImg from '../../Images/Jupiter.png';
import saturnImg from '../../Images/Saturno.png';
import uranusImg from '../../Images/Urano.png';
import neptuneImg from '../../Images/Netuno.png';
import plutoImg from '../../Images/Plutao.png';


function CardsTrips(props) {

  

  const planetImg = (planet) => {

    switch (planet) {

      case "Sol":
        return <Stl.PlntImg src={sunImg} />
      case "Mercúrio":
        return <Stl.PlntImg src={mercuryImg} />
      case "Vênus":
        return <Stl.PlntImg src={venusImg} />
      case "Terra":
        return <Stl.PlntImg src={earthImg} />
      case "Marte":
        return <Stl.PlntImg src={marsImg} />
      case "Jupiter":
        return <Stl.PlntImg src={jupiterImg} />
      case "Saturno":
        return <Stl.PlntImg src={saturnImg} />
      case "Urano":
        return <Stl.PlntImg src={uranusImg} />
      case "Netuno":
        return <Stl.PlntImg src={neptuneImg} />
      case "Plutão":
        return <Stl.PlntImg src={plutoImg} />
    }
  }

  const { trips} = props

  return (

    <Stl.Card key={trips.id}>
      <Stl.TrpName>{trips.name}</Stl.TrpName>
      {planetImg(trips.planet)}
      <Stl.TrpDescription>{trips.description}</Stl.TrpDescription>
      <Stl.TrpPlanet>Planeta: {trips.planet}</Stl.TrpPlanet>
      <Stl.TrpDuration>Duração: {trips.durationInDays} dias</Stl.TrpDuration>
      <Stl.TrpDate>Partida: {trips.date}</Stl.TrpDate>
   
    </Stl.Card>

  )
}

export default CardsTrips