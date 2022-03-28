import React, {Fragment} from "react";
import Planet from "./planet";

const Planets = () => {
  return(
    <Fragment>
      <h1>Lista de planetas</h1>
      <hr/>
      <Planet name='Saturno'
        description='Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema Solar atrás de Júpiter. Pertencente ao grupo dos gigantes gasosos, possui cerca de 95 massas terrestres e orbita a uma distância média de 9,5 unidades astronômicas.'
        img_url='https://upload.wikimedia.org/wikipedia/commons/a/af/Saturn%2C_Earth_size_comparison_2.jpg'/>
      <Planet name ='Mercúrio'
      description = 'Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. '
      img_url='https://upload.wikimedia.org/wikipedia/commons/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg'/>
    </Fragment>
  )
}

export default Planets;