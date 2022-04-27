import React, { useEffect, useState } from "react";
import GrayImg from "../../shared/gray img/index";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import Form from "./form"

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}


const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then(data =>{
      setSatellites(data['satellites']);
    })
  }, [])

  const addSatellite = (new_satellite) =>{
    setSatellites([...satellites, new_satellite]);
  }

  let title;
  if (props.title_with_underline) {
    title = <h3><u>{props.name}</u></h3>
  } else {
    title = <h3>{props.name}</h3>
  }

  return (
    <div onClick={() => props.ClickOnPlanet(props.name)}>
      {title}
      <DescriptionWithLink paragrafo={props.paragrafo}
        link={props.link} />
      <GrayImg gray={props.gray} img_url={props.img_url} />
      <h3>Satellites</h3>
      <hr/>
      <Form addSatellite={addSatellite}/>
      <hr/>
      <ul>
        {satellites.map((satellites, index) =>
          <li id={index}>{satellites.name}</li>
        )}
      </ul>
      <hr />
    </div>
  )
}

export default Planet;