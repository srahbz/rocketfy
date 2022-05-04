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
    //  Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport. 
     const targetSize = ref.current.getBoundingClientRect()
     const targetCenter = (targetSize.bottom - targetSize.top)/2

     const draggedOffSet = monitor.getClientOffset()// diz a distancia arrastada do item
     const draggedTop = draggedOffSet.y - targetSize.top
     
//  ve se quer botar o item na mesma posicao que ele esta em relacao a parte de cima
     if(draggadIndex < targetIndex && draggedTop < targetCenter){
       return;

     }
    //  ve se quer botar o item na mesma posicao que ele esta em relacao a parte de baixo
    if(draggadIndex>targetIndex && draggedTop > targetCenter){
      return;
    }



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