import React from 'react';

import { MdAddTask } from "react-icons/md";

import Card from "../Cards"

 import { Container } from './styles';

function list({data}) {
  return (
  <Container done={data.done}>
    <header>
      <h2>{data.title}</h2>
     {data.creatable && (
        <button type='button'>
        <MdAddTask size={23} color="white"/>
      </button>
     )}
    </header>
    <ul>
     {data.cards.map((card,index )=> <Card key={card.id} index={index} data={card}/>) }
    </ul>
  </Container>
  );
}

export default list;