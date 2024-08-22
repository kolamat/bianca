const body = document.querySelector("body");
body.style.margin = "5px";
body.style.backgroundColor = "#caef80";

const container = document.createElement("div");
container.id = "div";
container.style.display = "grid";
container.style.textAlign = "center";
container.style.height = "100vh";
container.style.justifyContent = "center";
document.querySelector("body").appendChild(container);

const H1 = document.createElement("h1");
H1.textContent = "Hi Love";
document.getElementById("div").appendChild(H1);

const imgContainer = document.createElement("div");
imgContainer.id = "imgDiv";
imgContainer.style.display = "grid";
imgContainer.style.gridTemplateRows = "300px";
imgContainer.style.gridTemplateColumns = "200px 200px";
imgContainer.style.gap = "10px";
document.getElementById("div").appendChild(imgContainer);

const img1 = document.createElement("img");
img1.src = "images/image1.jpg";
img1.style.width = "180px";
img1.style.borderRadius = "30px";
img1.style.marginLeft = "20px";
document.getElementById("imgDiv").appendChild(img1);

const img2 = document.createElement("img");
img2.src = "images/image2.jpg";
img2.style.marginTop = "100px";
img2.style.width = "180px";
img2.style.borderRadius = "30px";
document.getElementById("imgDiv").appendChild(img2);

const img3 = document.createElement("img");
img3.src = "images/image3.jpg";
img3.style.width = "180px";
img3.style.marginLeft = "20px";
img3.style.borderRadius = "30px";
document.getElementById("imgDiv").appendChild(img3);

const buttonContainer = document.createElement("div");
buttonContainer.id = "buttoncontainer";
buttonContainer.style.display = "flex";
buttonContainer.style.paddingLeft = "70px";
buttonContainer.style.paddingRight = "70px";
buttonContainer.style.justifyContent = "center";
document.getElementById("div").appendChild(buttonContainer);

const button = document.createElement("button");
button.textContent = "Click-Me";
button.id = "button";
button.style.fontSize = "25px";
button.style.padding = "5px";
button.style.borderRadius = "30px";
button.style.marginTop = "30px";
button.style.marginBottom = "10px";
button.style.background = "#7777ea";
button.style.color = "white";
button.addEventListener("click", smile);
document.getElementById("buttoncontainer").appendChild(button);

function smile() {
  alert(
    "Sorry My LOVE Just Wanna Disturb You A Little and Make You Laugh Alot"
  );
  for (let i = 0; i < 100; i++) {
    const p = document.createElement("p");
    p.textContent = "🤣";
    p.style.display = "flex";
    document.getElementById("button").appendChild(p);
  }
  button.textContent = "";
  //   document.getElementById("button").appendChild(button);
}
