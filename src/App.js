import React from 'react'
import { DndProvider } from 'react-dnd'
import{ HTML5Backend} from 'react-dnd-html5-backend'

import  GlobalStyle  from "./styles/global";
import Header from './components/header'
import Board from './components/Board'

function App() {
  return (
      // fragment é como uma div mas facilita a estilizacao
    <DndProvider backend={HTML5Backend}>
      <Header/>
      <Board/>
      
      <GlobalStyle/>
    </DndProvider>
    
  );
}

export default App;
