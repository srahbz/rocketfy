import React,{useRef} from 'react';
import { useDrag,useDrop } from 'react-dnd'
import { Container,Label } from './styles';

function Cards({data,index}) {
  const ref =useRef()

  const [{isDragging},dragRef]= useDrag({
    type: 'CARD',
    item:{index},
    collect: monitor =>({
      isDragging:monitor.isDragging()
    }),
  })

  const[,dropRef] = useDrop({
    accept:'CARD',
    hover(item,monitor){
     const draggadIndex = item.index
     const targetIndex = index
     
     if(draggadIndex === targetIndex){
       return
     }
     console.log('ok')

    }

  })

  dragRef(dropRef(ref))

  return (
  <Container ref={ref} isDragging={isDragging}>
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