import React,{useState} from 'react';
import List from '../list';
import {loadLists} from "../../services/api"

 import { Container } from './styles';


 const data = loadLists();

function Board() {
  const[lists,setLists] = useState(data);
  
  function move(from,to){
    console.log(from,to)
  }

  return (
  <Container>
    {lists.map(list => <List key={list.title}data={list}/>)}
  </Container>
  );
}

export default Board;