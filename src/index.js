import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BotaoTimer from './timer'
import BotaoContagem from './contador';


class App extends React.Component { 
  render() 
  { 
      return (
      <div>
        <h1>Contadores</h1> 
        <BotaoTimer/>
        <BotaoContagem/>
      </div>);
  } 
} 

ReactDOM.render( 
<App/>, 
document.getElementById('root') 
); 
  
  



