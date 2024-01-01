// Write your code below:
document.addEventListener("DOMContentLoaded", function () {
    // Change the color of the 5th "li" tag to blue
    var mangoLi = document.getElementById("mango");
    mangoLi.style.color = "blue";
  
    // Make all "li" tags italic
    var allLiTags = document.querySelectorAll(".fruits li");
    allLiTags.forEach(function (li) {
      li.style.fontStyle = "italic";
    });
  });
  