import React, {Fragment} from "react";


const DescriptionWithLink = (props) => {
  if(!props.paragrafo){
    return null;
  }

  if(props.link){
    return(
      <Fragment>
        <p>{props.paragrafo}</p>
        <p>
        <a href={props.link}>{props.link}</a>
        </p>
      </Fragment>
    )
  } else{
    return(
      <Fragment>
        <p><u>{props.paragrafo}</u></p>
        <p>
        <a href={props.link}>{props.link}</a>
        </p>
      </Fragment>
    )
  }
}

export default DescriptionWithLink;