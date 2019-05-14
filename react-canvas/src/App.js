import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {drawLine,drawRect} from './canvas/draw2D'

class App extends Component{
  componentDidMount = () =>{
    this.drawArrow()
    drawRect(this.canvasContext,100,100,100,100,{fillStyle:'rgb(0.4,135,169,0.5)',strokeStyle:"rgb(0,0.5,0.5,0.5)",lineWidth:1})
    drawRect(this.canvasContext,0,0,150,150,{fillStyle:'rgb(0.4,135,165,0.5)',strokeStyle:"rgb(0,0.5,0.5,0.5)",lineWidth:1})
   
  }
  drawArrow = () =>{
    const coordinates = [
      {'x':100,'y':350},
      {'x':500,'y':350},
      {'x':500,'y':200},
      {'x':700,'y':400},
      {'x':500,'y':600},
      {'x':500,'y':600},
      {'x':500,'y':450},
      {'x':100,'y':450},
      {'x':100,'y':350}
    ]
    const opts = {fillStyle:"blue",lineWidth:4,strokeStyle:"yellow"}
    drawLine(coordinates,this.canvasContext,opts)
  
  }
  setCanvas = (canvas) =>{
    this.canvas = canvas
    this.canvasContext = canvas.getContext("2d")
  }
  render(){
    return (
      <div className="App">
        <canvas id="canvas" ref={this.setCanvas} width={800} height={800}></canvas>
      </div>
    )
  }
}

export default App;
