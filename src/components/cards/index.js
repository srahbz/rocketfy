import React from 'react';
import img from '../../img/img.png'
import { Container,Label } from './styles';

function cards({data}) {
  return (
  <Container >
    <header>
      {data.labels.map(label =><Label key={label} color={label}/>)}
      {/* é o quadradinhoo colorido */}
     
    </header>
    {/* é o conteudo escrito */}
    <p>
      {data.content}
    </p>
   { data.user &&  <img src={data.user} alt=""/>}
  </Container>
  );
}

export default cards;