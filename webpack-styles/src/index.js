import "./style.scss";
import "./woof.css";
import Icon from "./icon.png";
const headline = "Welcome";
document.querySelector('h1').innerText = headline;

const myIcon = new Image();
myIcon.src = Icon; 

document.querySelector(".container").appendChild(myIcon); 
