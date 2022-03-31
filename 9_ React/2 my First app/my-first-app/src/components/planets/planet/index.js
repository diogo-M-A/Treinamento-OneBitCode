import React, { Fragment } from "react";
import GrayImg from "../../shared/gray img/index";
import DescriptionWithLink from "../../shared/descriptionWithLink";

async function getSatellites(id){
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

class Planet extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      satellites:[]
    }
  }

  componentDidMount(){
    getSatellites(this.props.id).then(data=>{
      this.setState(state => ({
        satellites: data['satellites']
      }))
    })
  }

  render(){
    let title;
    if (this.props.title_with_underline) {
      title = <h3><u>{this.props.name}</u></h3>
    } else {
      title = <h3>{this.props.name}</h3>
    }
  
    return (
      <div onClick={() => this.props.ClickOnPlanet(this.props.name)}>
        {title}
        <DescriptionWithLink paragrafo={this.props.paragrafo}
          link={this.props.link} />
        <GrayImg gray={this.props.gray} img_url={this.props.img_url} />
        <h3>Satellites</h3>
        <ul>
          {this.state.satellites.map((satellites, index)=>
          <li id={index}>{satellites.name}</li>
          )}
        </ul>
        <hr/>
      </div>
    )
  }
}

export default Planet;