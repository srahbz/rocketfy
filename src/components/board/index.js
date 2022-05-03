import React from 'react';
import List from '../list';
import {loadLists} from "../../services/api"

 import { Container } from './styles';
 const list = loadLists();

function board() {
  return (
  <Container>
    <List/>
    <List/>
    <List/>
    <List/>
  </Container>
  );
}

export default board;