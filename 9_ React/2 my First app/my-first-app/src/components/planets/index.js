import React, { Fragment, useState, useEffect } from "react";
import Planet from "./planet";

const ClickOnPlanet = (name) => {
  alert(`Um click no planeta: ${name}`)
}

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json');
  let data = await response.json();
  return data;
}

/* componentDidMount(){
  getPlanets().then(data => {
    setState(state => ({
      planets: data['planets']
    }))
  })
} */

const Planets = () => {
  const [planets, setPlanets] = useState([
    
  ]);

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data['planets']);
    })
  }, [])

  const removeLast = () => {
    let new_Planets = [...planets];
    new_Planets.pop();
    setPlanets(new_Planets)
  }

  const duplicateLast = () => {
    let lastPlanet = planets[planets.length - 1];
    setPlanets([...planets, lastPlanet]);
  }

  return (
    <Fragment>
      <h1>Lista de planetas</h1>
      <hr />

      <button onClick={removeLast}>Remove Last</button>
      <button onClick={duplicateLast}>Duplicate Last</button>

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