import React, { Fragment } from "react";
import GrayImg from "../../shared/gray img/index";
import DescriptionWithLink from "../../shared/descriptionWithLink";


const Planet = (props) => {


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
      <h4>Satélites</h4>
      <ul>
        {['a', 'b', 'c', 'd'].map((n)=>
          <li>Satélite {n}</li>)}
      </ul>
      <hr/>
    </div>
  )
}

export default Planet;