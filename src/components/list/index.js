import React from 'react';
import { MdAddTask } from "react-icons/md";

 import { Container } from './styles';

function list() {
  return (
  <Container >
    <header>
      <h2>Tarefas</h2>
      <button type='button'>
        <MdAddTask size={23} color="white"/>
      </button>
    </header>
  </Container>
  );
}

export default list;