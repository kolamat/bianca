const body = document.querySelector("body");
body.style.margin = "0px";
body.style.backgroundColor = "#aae92c;";

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
document.getElementById("div").appendChild(imgContainer);

const img1 = document.createElement("img");
img1.src = "/image1.jpg";
img1.style.width = "200px";
document.getElementById("imgDiv").appendChild(img1);

const img2 = document.createElement("img");
img2.src = "/image2.jpg";
img2.style.marginTop = "100px";
img2.style.width = "200px";
document.getElementById("imgDiv").appendChild(img2);

const img3 = document.createElement("img");
img3.src = "/image3.jpg";
img3.style.width = "200px";
img3.style.height = "full";
img3.style.gridAutoRows = "2";
document.getElementById("imgDiv").appendChild(img3);

const button = document.createElement("button");
button.textContent = "Click-Me";
button.id = "button";
button.style.padding = "20px";
button.style.width = "100px";
button.style.borderRadius = "30px";
button.style.marginTop = "30px";
button.addEventListener("click", smile);
document.getElementById("div").appendChild(button);

const closeButton = document.createElement("button");
closeButton.textContent = "Click-Me";
closeButton.id = "closeButton";
closeButton.style.padding = "20px";
closeButton.style.width = "100px";
closeButton.style.borderRadius = "30px";
closeButton.style.marginTop = "30px";
closeButton.addEventListener("click", closeSmile);
document.getElementById("div").appendChild(closeButton);

function smile() {
  //   const p = document.createElement("p");
  button.textContent =
    "🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣";
  document.getElementById("button").appendChild(button);
}
function closeSmile() {
  //   const p = document.createElement("p");
  closeButton.textContent = "";
  alert(
    "sorry my love just wanna disturb you a little and make you laugh alot"
  );
  document.getElementById("button").appendChild(closeButton);
}
