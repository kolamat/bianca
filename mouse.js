const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.top = y + "px";
  cursor.style.left = x + "px";
  cursor.style.display = "block";

  // cursor effect on mouse stop
  function mouseStopped() {
    cursor.style.display = "none";
  }
  clearTimeout(timeout);
  timeout = setTimeout(mouseStopped, 1000);
});

//cursor effect on mouseout
document.addEventListener("mouseout", () => {
  cursor.style.display = "none";
});
