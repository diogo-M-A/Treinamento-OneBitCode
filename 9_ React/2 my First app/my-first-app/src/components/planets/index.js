import React, { Fragment } from "react";
import Planet from "./planet";

const ClickOnPlanet = (name) => {
  alert(`Um click no planeta: ${name}`)
}

async function getPlanets(){
  let response = await fetch('http://localhost:3000/api/planets.json');
  let data = await response.json();
  return data;
}

class Planets extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      planets:[

      ]
    }
  }

  componentDidMount(){
    getPlanets().then(data =>{
      this.setState(state =>({
        planets:data['planets']
      }))
    })
  }

  removeLast=()=>{
    let new_Planets = [...this.state.planets];
    new_Planets.pop();
    this.setState(state =>({
      planets : new_Planets
    }))
  }

  duplicateLast = ()=>{
    let lastPlanet = this.state.planets[this.state.planets.length-1];
    this.setState(state => ({
      planets: [...this.state.planets, lastPlanet]
    }))
  }

  render() {
    return (
      <Fragment>
        <h1>Lista de planetas</h1>
        <hr />

        <button onClick={this.removeLast}>Remove Last</button>
        <button onClick={this.duplicateLast}>Duplicate Last</button>

        {this.state.planets.map((planet, index)=>
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
}



export default Planets;