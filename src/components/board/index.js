import React from 'react';
import List from '../list';
import {loadLists} from "../../services/api"

 import { Container } from './styles';
import list from '../list';

 const lists = loadLists();

function board() {
  return (
  <Container>
    {lists.map(list => <List key={list.title}data={list}/>)}
  </Container>
  );
}

export default board;