import React, {Fragment} from "react";
import './style.css';

const GrayImg = (props) => {
  return(
    <Fragment>
      <img src={props.img_url} alt='saturno'></img>
    </Fragment>
  )
}

export default GrayImg;