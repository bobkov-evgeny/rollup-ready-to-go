import "./index.css";
import img from "./assets/js.jpg";

console.log(`Hello World!`);

const text = document.createElement("h1");
text.textContent = "I love JavaScript";
const image = document.createElement("img");
image.className = "js-img";
image.src = img;

document.body.append(text);
document.body.append(image);
