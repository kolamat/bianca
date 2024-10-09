const shuffledImage = [
  { image1: "images/image1.jpg" },
  { image2: "images/image2.jpg" },
  { image3: "images/image3.jpg" },
  { image4: "images/image4.JPG" },
  { image5: "images/image5.JPG" },
  { image6: "images/image6.JPG" },
  { image7: "images/image7.JPG" },
  { image8: "images/image8.JPG" },
  { image9: "images/image9.JPG" },
  { image10: "images/image10.JPG" },
  { image11: "images/image11.JPG" },
  { image12: "images/image12.JPG" },
  { image13: "images/image13.JPG" },
];

console.log(shuffledImage);

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

const imageA = document.createElement("img");
imageA.src = "images/image1.jpg";
imageA.style.width = "180px";
document.querySelector("body").appendChild(imageA);

const imageB = document.createElement("img");
imageB.src = "images/image2.jpg";
imageB.style.width = "180px";
document.querySelector("body").appendChild(imageB);

const imageC = document.createElement("img");
imageC.src = "images/image3.jpg";
imageC.style.width = "180px";
document.querySelector("body").appendChild(imageC);

const imageD = document.createElement("img");
imageD.src = "images/image4.JPG";
imageD.style.width = "180px";
document.querySelector("body").appendChild(imageD);

const imageE = document.createElement("img");
imageE.src = "images/image5.JPG";
imageE.style.width = "180px";
document.querySelector("body").appendChild(imageE);

const imageF = document.createElement("img");
imageF.src = "images/image6.JPG";
imageF.style.width = "180px";
document.querySelector("body").appendChild(imageF);

const imageG = document.createElement("img");
imageG.src = "images/image7.JPG";
imageG.style.width = "180px";
document.querySelector("body").appendChild(imageG);

const imageH = document.createElement("img");
imageH.src = "images/image8.JPG";
imageH.style.width = "180px";
document.querySelector("body").appendChild(imageH);

const imageI = document.createElement("img");
imageI.src = "images/image9.JPG";
imageI.style.width = "180px";
document.querySelector("body").appendChild(imageI);

const imageJ = document.createElement("img");
imageJ.src = "images/image10.JPG";
imageJ.style.width = "180px";
document.querySelector("body").appendChild(imageJ);

const imageK = document.createElement("img");
imageK.src = "images/image11.JPG";
imageK.style.width = "180px";
document.querySelector("body").appendChild(imageK);

const imageL = document.createElement("img");
imageL.src = "images/image12.JPG";
imageL.style.width = "180px";
document.querySelector("body").appendChild(imageL);

const imageM = document.createElement("img");
imageM.src = "images/image13.JPG";
imageM.style.width = "180px";
document.querySelector("body").appendChild(imageM);

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
