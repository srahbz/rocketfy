import React, { Fragment } from 'react'

import  GlobalStyle  from "./styles/global";
import Header from './components/header'

function App() {
  return (
      // fragment é como uma div mas facilita a estilizacao
    <Fragment>
      <Header/>
      
      <GlobalStyle/>
    </Fragment>
    
  );
}

export default App;
