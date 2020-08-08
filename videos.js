// Get the modal
var modal = document.getElementsByClassName("myModal");

// Get the button that opens the modal
var img = document.getElementsByClassName("myImg");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Pause video
var p = document.getElementsById("myVideo");

function pauseVid() {
  p.pause();
}

//Set Volume of Video
var vol = document.getElementById("myVideo").volume = 0.1;

// When the user clicks on the button, open the modal
img.onclick = function() {
    modal.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it & pause the video
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    p.pause();
  }
}