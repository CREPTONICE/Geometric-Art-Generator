const btn = document.getElementById("btn");
const shapes = [
  "quad-circule-1",
  "quad-circule-2",
  "quad-circule-3",
  "quad-circule-4",
  "traingle-1",
  "traingle-2",
  "traingle-3",
  "circule",
];

const colors = ["#01d2fd", "#ffc700", "#fe9f12", "#06d0c7"];
const boxes = document.querySelectorAll(".container div");

let generatePattern = () => {
  boxes.forEach((box) => {
    box.className = "";
    let i = Math.floor(Math.random() * shapes.length);
    let j = Math.floor(Math.random() * colors.length);

    box.classList.add(shapes[i]);
    box.style.backgroundColor = colors[j];
  });
};

btn.addEventListener("click", generatePattern);
window.addEventListener("load", generatePattern);
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    generatePattern();
  }
});
