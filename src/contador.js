import React from 'react';
import './index.css';

export default class BotaoContagem extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        soma : 0}; 
    }
    
    render () {
      return (
      <div>
        
      <button className="contagem" onClick={
        () => {
          let somaAtual = 
          this.state.soma;
          this.setState({soma: 
            somaAtual + 1})
          }
        }
            >{this.state.soma}</button>
        </div>
      )
      }
    }
   
  
    
    