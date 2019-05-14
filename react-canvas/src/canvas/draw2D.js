
/** 根据坐标列表coordinates在指定canvas的context上绘制一个图形
 *  coordinates 类型：列表, 元素格式：({'x':100,'y':300})
 */

export const drawLine = function(coordinates,context,opts){
    context.beginPath()
    context.moveTo(coordinates[0].x,coordinates[0].y)
    for (let index = 1; index < coordinates.length; index++) {
        context.lineTo(coordinates[index].x,coordinates[index].y)
        //context.lineWidth = opts.lineWidth||10
    }
    context.closePath()
    context.fillStyle = opts.fillStyle ||"#fefefe"
    context.fill()
    context.lineWidth = opts.lineWidth 
    context.strokeStyle = opts.strokeStyle 
    context.stroke()   
}

/** 绘制矩形
 * x\y:矩形起点x\y坐标
 * width\height:矩形的宽高
 * opts:样式设置
 * eg： drawRect(canvasContext,100,100,100,100,{fillStyle:'red',lineWidth:10,strokeStyle:"#fefefe"})
 */
export const drawRect = function(context,x,y,width,height,opts){

    context.lineWidth = opts.lineWidth 
    context.fillStyle = opts.fillStyle
    context.strokeStyle = opts.strokeStyle 
    context.fillRect(x,y,width,height)
    context.strokeRect(x,y,width,height)
}

