import React from "react"
import * as Stl from './CardsTripsStl.js'

import sunImg from '../../Images/1.png';
import mercuryImg from '../../Images/2.png';
import venusImg from '../../Images/3.png';
import earthImg from '../../Images/4.png';
import marsImg from '../../Images/5.png';
import jupiterImg from '../../Images/6.png';
import saturnImg from '../../Images/7.png';
import uranusImg from '../../Images/8.png';
import neptuneImg from '../../Images/9.png';
import plutoImg from '../../Images/10.png';


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

  const { trips, goToDetailTrips } = props

  return (

    <Stl.Card>
      <Stl.TrpName>{trips.name}</Stl.TrpName>
      {planetImg(trips.planet)}
      <Stl.TrpDescription>{trips.description}</Stl.TrpDescription>
      <Stl.TrpPlanet>Planeta: {trips.planet}</Stl.TrpPlanet>
      <Stl.TrpDuration>Duração: {trips.durationInDays} dias</Stl.TrpDuration>
      <Stl.TrpDate>Partida: {trips.date}</Stl.TrpDate>
    < Stl.BtnDetailTrip onClick = {() => goToDetailTrips(trips.id)}>Detalhes</Stl.BtnDetailTrip>
    </Stl.Card>

  )
}

export default CardsTrips