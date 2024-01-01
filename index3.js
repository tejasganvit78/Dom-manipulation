document.addEventListener("DOMContentLoaded", function () {
    // Use querySelector at least 4 times to select various elements
    var mainHeading = document.querySelector("#main-heading");
    var basketHeading = document.querySelector("#basket-heading");
    var headerDiv = document.querySelector("#header");
    var thanksDiv = document.querySelector("#thanks");
  
    // Change the color of the basket heading to brown
    basketHeading.style.color = "brown";
  
    // Use querySelectorAll at least 3 times to select all "li" elements
    var fruitItems = document.querySelectorAll(".fruits li");
    var evenFruitItems = document.querySelectorAll(".fruits li:nth-child(even)");
  
    // Change the background color and text color of the second and fourth list items
    var secondItem = fruitItems[1]; // Note: Arrays are 0-indexed
    var fourthItem = fruitItems[3];
  
    secondItem.style.backgroundColor = "brown";
    secondItem.style.color = "white";
  
    fourthItem.style.backgroundColor = "brown";
    fourthItem.style.color = "white";
  });
  