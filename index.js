const body = document.querySelector("body");
body.style.margin = "0px";

const container = document.createElement("div");
container.id = "div";
container.style.display = "grid";
container.style.gridTemplateRows = "200px 200px";
container.style.gridTemplateColumns = "200px";
document.querySelector("body").appendChild(container);

const H1 = document.createElement("h1");
H1.textContent = "Hi Love";
document.getElementById("div").appendChild(H1);

const imgContainer = document.createElement("div");
imgContainer.id = "imgDiv";
imgContainer.style.display = "grid";
imgContainer.style.gridTemplateRows = "200px 200px";
imgContainer.style.gridTemplateColumns = "200px 200px";
document.getElementById("div").appendChild(imgContainer);

const img1 = document.createElement("img");
img1.src = "/image1.jpg";
img1.style.width = "100px";
document.getElementById("imgDiv").appendChild(img1);

const img2 = document.createElement("img");
img2.src = "/image2.jpg";
img2.style.width = "100px";
document.getElementById("imgDiv").appendChild(img2);

const img3 = document.createElement("img");
img3.src = "/image3.jpg";
img3.style.width = "100px";
img3.style.columnSpan = "all";
// img3.style.gridRowStart = "1";
// img3.style.gridRowEnd = "2";
// img3.style.gridColumnStart = "1";
// img3.style.gridColumnEnd = "3";
document.getElementById("imgDiv").appendChild(img3);
