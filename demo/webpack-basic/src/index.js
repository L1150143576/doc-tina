import "./style.css"; // 1. 导入css文件
// src/index.js
function component() {
  var element = document.createElement("div");

  element.innerHTML = "Hello Webpack";
  element.classList.add("color_red"); // 2. 添加类名
  return element;
}

document.body.appendChild(component());
