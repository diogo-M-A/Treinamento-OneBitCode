import React, {Fragment} from "react";
import GrayImg from "../../shared/gray img/index";


const Planet = (props) => {
  return(
    <Fragment>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <GrayImg img_url={props.img_url}/>
    </Fragment>
  )
}

export default Planet;