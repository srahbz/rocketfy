import React from 'react';

import { MdAddTask } from "react-icons/md";

import Card from "../cards"

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
    <ul>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </ul>
  </Container>
  );
}

export default list;