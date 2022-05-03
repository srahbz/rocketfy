import React from 'react';
import img from '../../img/img.png'
import { Container,Label } from './styles';

function cards() {
  return (
  <Container >
    <header>
      {/* é o quadradinhoo colorido */}
      <Label color="blueviolet"/>
    </header>
    {/* é o conteudo escrito */}
    <p>
      Fazer migração completa de servidor
    </p>
    <img src={img} alt="img"/>
  </Container>
  );
}

export default cards;