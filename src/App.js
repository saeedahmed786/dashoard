import React from 'react';
import 'antd/dist/antd.css';
import Dashboard from './Dashboard';
import { Navbar } from './Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

 const App = () => {
  return (
    <div>
    <BrowserRouter>
      
     <Navbar/>
     <Switch>

     <Route path = '/' component = {Dashboard}/>
     </Switch>
    </BrowserRouter>
      
    </div>
  )
}


export default App;
