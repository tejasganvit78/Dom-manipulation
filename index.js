document.addEventListener("DOMContentLoaded", function () {
    // Change the main heading text to 'Fruit World'
    var mainHeading = document.getElementById("main-heading");
    mainHeading.textContent = "Fruit World";
  
    // Change the font color of 'Fruit World' to orange
    mainHeading.style.color = "orange";
  
    // Change the font color of 'Fruits In Basket' to green
    var basketHeading = document.getElementById("basket-heading");
    basketHeading.style.color = "green";
  
    // Add a paragraph element with text 'Please visit us again' inside the div with id='thanks'
    var thanksDiv = document.getElementById("thanks");
    var visitAgainParagraph = document.createElement("p");
    visitAgainParagraph.textContent = "Please visit us again";
    thanksDiv.appendChild(visitAgainParagraph);
  
    // Get the div with id='header' and change its background color to green
    var headerDiv = document.getElementById("header");
    headerDiv.style.backgroundColor = "green";
  
    // Add a bottom border of orange color to the div with id='header'
    headerDiv.style.borderBottom = "2px solid orange";
  });
  