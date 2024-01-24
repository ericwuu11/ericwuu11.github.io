// Popup Statement
document.querySelector("html").addEventListener("click", function () {
    alert("This is making me hungry :(");
  });

// Click image to reveal another image 
const myImage = document.querySelector("img");

myImage.onclick = function() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/20230303001689.jpg") {
    myImage.setAttribute("src", "images/VDIPvKZgi415wa6KK7XE7619jDwM2NtCupfRBOln3cA.webp");
  } else {
    myImage.setAttribute("src", "images/VDIPvKZgi415wa6KK7XE7619jDwM2NtCupfRBOln3cA.webp");
  }
};

// Additional Title Introduction 
let myHeading = document.querySelector("h1");

function setUserName() {
    const guest = prompt("Your name");

    if (guest) {
        localStorage.setItem("name", guest);
        myHeading.textContent = "Come Enjoy Some Hot Pot " + guest + "!!!";
    } else {
        // If the guest didn't provide a name, reset and ask again
        localStorage.removeItem("name");
        setUserName();
    }
}

setUserName();
