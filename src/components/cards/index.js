import React from 'react';
import { useDrag } from 'react-dnd'
import { Container,Label } from './styles';

function Cards({data}) {

  const [{isDragging},dragRef]= useDrag({
    type: 'CARD',
    item:{},
    collect: monitor =>({
      isDragging:monitor.isDragging()
    }),
  })

  return (
  <Container ref={dragRef} isDragging={isDragging}>
    <header>
      {data.labels.map(label =><Label key={label} color={label}/>)}
      {/* é o quadradinhoo colorido */}
     
    </header>
    {/* é o conteudo escrito */}
    <p>
      {data.content}
    </p>
   { data.user ? <img src={data.user} alt=""/>: <img src='https://cdn-icons-png.flaticon.com/512/590/590726.png'/>}
  </Container>
  );
}

export default Cards;