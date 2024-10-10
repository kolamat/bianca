const shuffledVideo = ["vid1.mp4", "vid2.mp4", "vid3.mp4"];

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

const H1 = document.createElement("h3");
H1.textContent = "Hi Love, My Mighty High Damsel";
document.getElementById("div").appendChild(H1);

const imgContainer = document.createElement("div");
imgContainer.id = "imgDiv";
imgContainer.style.display = "grid";
imgContainer.style.gridTemplateRows = "2 00px";
imgContainer.style.gridTemplateColumns = "200px 200px";
imgContainer.style.gap = "10px";
document.getElementById("div").appendChild(imgContainer);

const img1 = document.createElement("img");
img1.src = "images/image1.jpg";
img1.style.width = "200px";
img1.style.height = "200px";
img1.style.borderRadius = "30px";
img1.style.borderRadius = "30px";
document.getElementById("imgDiv").appendChild(img1);

const img2 = document.createElement("img");
img2.src = "images/image2.jpg";
img2.style.width = "200px";
img2.style.height = "200px";
img2.style.borderRadius = "30px";
document.getElementById("imgDiv").appendChild(img2);

const img3 = document.createElement("img");
img3.src = "images/image3.jpg";
img3.style.width = "200px";
img3.style.height = "200px";
img3.style.borderRadius = "30px";
document.getElementById("imgDiv").appendChild(img3);

const buttonContainer = document.createElement("div");
buttonContainer.id = "buttoncontainer";
buttonContainer.style.display = "flex";
buttonContainer.style.padding = "0px";
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

const imageD = document.createElement("img");
imageD.src = "images/image4.JPG";
imageD.style.width = "200px";
imageD.style.borderRadius = "10px";
imageD.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageD);

const imageE = document.createElement("img");
imageE.src = "images/image5.JPG";
imageE.style.width = "200px";
imageE.style.borderRadius = "10px";
imageE.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageE);

const imageF = document.createElement("img");
imageF.src = "images/image6.JPG";
imageF.style.width = "200px";
imageF.style.borderRadius = "10px";
imageF.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageF);

const imageG = document.createElement("img");
imageG.src = "images/image7.JPG";
imageG.style.width = "200px";
imageG.style.borderRadius = "10px";
imageG.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageG);

const imageH = document.createElement("img");
imageH.src = "images/image8.JPG";
imageH.style.width = "200px";
imageH.style.borderRadius = "10px";
imageH.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageH);

const imageI = document.createElement("img");
imageI.src = "images/image9.JPG";
imageI.style.width = "200px";
imageI.style.borderRadius = "10px";
imageI.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageI);

const imageJ = document.createElement("img");
imageJ.src = "images/image10.JPG";
imageJ.style.width = "200px";
imageJ.style.borderRadius = "10px";
imageJ.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageJ);

const imageK = document.createElement("img");
imageK.src = "images/image11.JPG";
imageK.style.width = "200px";
imageK.style.borderRadius = "10px";
imageK.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageK);

const imageL = document.createElement("img");
imageL.src = "images/image12.JPG";
imageL.style.width = "200px";
imageL.style.borderRadius = "10px";
imageL.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageL);

const imageM = document.createElement("img");
imageM.src = "images/image13.JPG";
imageM.style.width = "200px";
imageM.style.borderRadius = "10px";
imageM.style.height = "200px";
document.getElementById("imgDiv").appendChild(imageM);

function smile() {
  alert(
    "Sorry My LOVE Just Wanna Disturb You A Little and Make You Laugh Alot"
  );
  button.textContent = "";
  button.style.display = "grid";
  button.style.gridTemplateRows = "20px";
  button.style.gridTemplateColumns = "35px 35px 35px 35px";
  for (let i = 0; i < 100; i++) {
    const p = document.createElement("p");
    p.textContent = "🤣";
    document.getElementById("button").appendChild(p);
  }
}
