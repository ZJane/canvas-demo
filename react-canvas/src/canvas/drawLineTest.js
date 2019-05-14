import {drawLine} from './draw2D'

/** 绘制箭头 */
const drawArrow = (canvasContext) =>{
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
    const opts = {lineWidth:10,strokeStyle:"blue"}
    drawLine(coordinates,canvasContext,opts)
}
