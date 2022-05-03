import React, { Fragment } from 'react'

import  GlobalStyle  from "./styles/global";
import Header from './components/header'
import Board from './components/board'

function App() {
  return (
      // fragment é como uma div mas facilita a estilizacao
    <Fragment>
      <Header/>
      <Board/>
      
      <GlobalStyle/>
    </Fragment>
    
  );
}

export default App;
