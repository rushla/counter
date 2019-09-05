import React from 'react';
import './index.css';

export default class BotaoTimer extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        contador : 0,
        isRunning: false
      }
      this.handleStart = this.handleStart.bind(this);
      this.handleStop = this.handleStop.bind(this);
    }
    handleStart(){
      if (this.state.isRunning === false){
        this.intervalo = setInterval( () => {
          this.setState({
            contador: this.state.contador + 1, 
            isRunning: true 
          }) 
        }, 1000)
      }     
    }
    handleStop(){
        this.setState({
          contador: 0,
        })   
      }
    render () {
     
      return (
    
      <div>  
        <p>{this.state.contador}</p>
        <button className="contador" onClick ={
          this.handleStart}>contar</button>
  
        <button className="zerar" onClick ={
          this.handleStop}>zerar</button>
  
        <button className="pausar" onClick ={
          () => {
            this.setState({
              isRunning: false});
              clearInterval(this.intervalo)}}>pausar</button>
  
        </div>
       
      
        )
      }
    }
  