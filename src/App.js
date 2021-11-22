import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Provider as MainProvider } from '../src/context/MainContext';
import { SearchComponent } from './components/SearchComponent';
import { ResultComponent } from './components/ResultComponent';


const App = () => {
  return (
  <MainProvider>
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<SearchComponent/>}/>
          <Route exact path='/result' element={<ResultComponent/>} />
          <Route exact path='/result/:id' element={<ResultComponent/>} />
        </Routes>
      </Fragment>
    </Router>
  </MainProvider>
  );
}

export default App;
