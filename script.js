const container = document.querySelector("#container");
const rock = document.createElement("div");
const paper = document.createElement("div");
const scissors = document.createElement("div");

rock.setAttribute("style", "Background-color: yellow; border: 2px solid black");
paper.setAttribute(
  "style",
  "Background-color: yellow; border: 2px solid black"
);
scissors.setAttribute(
  "style",
  "Background-color: yellow; border: 2px solid black"
);

container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);
