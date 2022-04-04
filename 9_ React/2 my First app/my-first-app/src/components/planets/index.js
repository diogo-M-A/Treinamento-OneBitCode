import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";
import Form from "./form";

const ClickOnPlanet = (name) => {
  alert(`Um click no planeta: ${name}`)
}

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json');
  let data = await response.json();
  return data;
}

const Planets = () => {
  const [planets, setPlanets] = useState([
    
  ]);

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets']);
    })
  }, [])

  const addPlanet = (newPlanet) =>{
    setPlanets([...planets, newPlanet]);
  }

  return (
    <Fragment>
      <h1>Lista de planetas</h1>
      <hr/>
      <Form addPlanet={addPlanet}/>
      <hr />
      {planets.map((planet, index) =>
        <Planet
          id={planet.id}
          name={planet.name}
          paragrafo={planet.paragrafo}
          link={planet.link}
          img_url={planet.img_url}
          key={index}
        />
      )}

    </Fragment>
  )
}



export default Planets;