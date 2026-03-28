// Function to create color box
function createColorBox(colorValue) {

    if (colorValue === "") {
        alert("Please enter a color!");
        return;
    }

    let box = document.createElement("div");

    box.style.width = "100px";
    box.style.height = "100px";
    box.style.backgroundColor = colorValue;
    box.style.display = "inline-block";
    box.style.margin = "10px";

    document.getElementById("boxContainer").appendChild(box);
}

// Separate functions for each input
function addColor1() {
    let color = document.getElementById("color1").value;
    createColorBox(color);
}

function addColor2() {
    let color = document.getElementById("color2").value;
    createColorBox(color);
}

function addColor3() {
    let color = document.getElementById("color3").value;
    createColorBox(color);
}

// Clear all boxes
function clearBoxes() {
    document.getElementById("boxContainer").innerHTML = "";
}

// BONUS: Display BOM information
function showBrowserInfo() {

    let info = "Window Width: " + window.innerWidth + "px<br>";
    info += "Window Height: " + window.innerHeight + "px<br>";
    info += "Browser Name: " + navigator.appName + "<br>";
    info += "User Agent: " + navigator.userAgent;

    document.getElementById("browserInfo").innerHTML = info;
}

// Run BOM info when page loads
showBrowserInfo();
