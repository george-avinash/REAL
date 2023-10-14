 // Get the button and the popup
 const showPopupButton = document.getElementById("showPopup");
 const popup = document.getElementById("myPopup");

 // Get the close button
 const closePopupButton = document.getElementById("closePopup");

 // Open the popup when the button is clicked
 showPopupButton.addEventListener("click", function () {
     popup.style.display = "block";
 });

 // Close the popup when the close button is clicked
 closePopupButton.addEventListener("click", function () {
     popup.style.display = "none";
 });

 // Close the popup if the user clicks outside the content
 window.addEventListener("click", function (event) {
     if (event.target === popup) {
         popup.style.display = "none";
     }
 });