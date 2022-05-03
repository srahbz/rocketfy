import React from 'react';

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
  </Container>
  );
}

export default cards;