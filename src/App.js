import React from 'react';
import TodoList from './component/TodoList/TodoList';
import Header from './component/TodoList/About/Header/Header';
import About from './component/TodoList/About/About';
import { BrowserRouter as  Router, Routes ,Route} from 'react-router-dom';

export default function App() {
  return (

    

      <Router>
      <Header/>
  
 
     <Routes>
      <Route path="/" exact Component={TodoList}/>
      <Route path="/about"Component={About}/>
      </Routes>
     </Router>
      
        
    
    
  );
};
