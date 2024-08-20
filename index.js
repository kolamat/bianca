const container = document.createElement("div");
container.textContent = "am a container";
container.id = "div";
container.style.display = "grid";
container.style.gridTemplateRows = "200px 200px";
container.style.gridTemplateColumns = "200px 200px";
document.querySelector("body").appendChild(container);

const H1 = document.createElement("h1");
H1.textContent = "Hi Love";
document.getElementById("div").appendChild(H1);

const img1 = document.createElement("img");
img1.src = "/image1.jpg";
img1.style.width = "100px";
document.getElementById("div").appendChild(img1);

const img2 = document.createElement("img");
img2.src = "/image2.jpg";
img2.style.width = "100px";
document.getElementById("div").appendChild(img2);

const img3 = document.createElement("img");
img3.src = "/image3.jpg";
img3.style.width = "100px";
img3.style.columnSpan = "span 2";
img3.style.gridRowEnd = "2";
document.getElementById("div").appendChild(img3);
