$(document).ready(function(){
    $("#infoBtn").delay(2000).show(0);
    
      // Show the popup and overlay on button click
      $('#infoBtn').on('click', function () {
        $('#overlay').fadeIn(300); 
        $('#popup').fadeIn(300); 
      });

      // Hide the popup and overlay on close button click
      $('#closeBtn').on('click', function () {
        $('#overlay').fadeOut(300); 
        $('#popup').fadeOut(300); 
      });

      // Hide the popup and overlay when clicking outside of the popup
      $('#overlay').on('click', function () {
        $(this).fadeOut(300); 
        $('#popup').fadeOut(300); 
      });
    });
  

