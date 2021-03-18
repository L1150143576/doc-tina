import avart from "./avart.jpg"
import './index.css'
var img=new Image()
img.src=avart
img.classList.add('avart')
var root=document.getElementById('root')
console.log(root)
root.append(img)