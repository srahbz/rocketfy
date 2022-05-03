import React from 'react';
import List from '../list';

 import { Container } from './styles';

function board() {
  return (
  <Container>
    <List/>
    <List/>
    <List/>
    <List/>
    <List/>
  </Container>
  );
}

export default board;