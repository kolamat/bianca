const body = document.querySelector("body");
body.style.margin = "0px";
body.style.backgroundColor = "#caef80";

const container = document.createElement("div");
container.id = "div";
container.style.display = "grid";
container.style.textAlign = "center";
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
img1.src = "/image1.jpg";
img1.style.width = "200px";
img1.style.borderRadius = "30px";
document.getElementById("imgDiv").appendChild(img1);

const img2 = document.createElement("img");
img2.src = "/image2.jpg";
img2.style.marginTop = "100px";
img2.style.width = "200px";
img2.style.borderRadius = "30px";
document.getElementById("imgDiv").appendChild(img2);

const img3 = document.createElement("img");
img3.src = "/image3.jpg";
img3.style.width = "200px";
img3.style.borderRadius = "30px";
document.getElementById("imgDiv").appendChild(img3);

const buttonContainer = document.createElement("div");
buttonContainer.id = "buttoncontainer";
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "space-between";
document.getElementById("div").appendChild(buttonContainer);

const button = document.createElement("button");
button.textContent = "Click-Me";
button.id = "button";
button.style.fontSize = "25px";
button.style.padding = "5px";
button.style.borderRadius = "30px";
button.style.marginTop = "30px";
button.style.background = "#7777ea";
button.style.color = "white";
button.addEventListener("click", smile);
document.getElementById("buttoncontainer").appendChild(button);

const closeButton = document.createElement("button");
closeButton.textContent = "Click-Me for an alert";
closeButton.id = "closeButton";
closeButton.style.fontSize = "25px";
closeButton.style.padding = "5px";
closeButton.style.borderRadius = "30px";
closeButton.style.marginTop = "30px";
closeButton.style.background = "#7777ea";
closeButton.style.color = "white";
closeButton.addEventListener("click", closeSmile);
document.getElementById("buttoncontainer").appendChild(closeButton);

function smile() {
  button.textContent =
    "🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣";
  document.getElementById("button").appendChild(button);
}
function closeSmile() {
  button.textContent = "Thank you for Clicking me too LOVE";
  alert(
    "Sorry My LOVE Just Wanna Disturb You A Little and Make You Laugh Alot"
  );
  closeButton.style.fontSize = "20px";
  document.querySelector("body").appendChild(closeButton);
}
