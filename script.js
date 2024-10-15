$(document).ready(function () {
  $("#infoBtn").delay(2000).show(0);

  // Show the popup and overlay on button click
  $("#infoBtn").on("click", function () {
    $("#overlay").fadeIn(300);
    $("#popup").fadeIn(300);
  });

  // Hide the popup and overlay on close button click
  $("#closeBtn").on("click", function () {
    $("#overlay").fadeOut(300);
    $("#popup").fadeOut(300);
  });

  $(document).on("keydown", function (event) {
    if (event.key == "Escape") {
      $("#overlay").fadeOut(300);
      $("#popup").fadeOut(300);
    }
  });

  // Hide the popup and overlay when clicking outside of the popup
  $("#overlay").on("click", function () {
    $(this).fadeOut(300);
    $("#popup").fadeOut(300);
  });


  // Code for ShowCase Page starts here!

  $(".gallery")
    .on("mouseenter", function () {
      $(this).find('.infoBtn').show();
    })
    .on("mouseleave", function () {
      $(this).find('.infoBtn').hide();
    });


  $(".infoBtn").on("click", function () {

    let $description = $(this).data('description');

    $("#modalDescription").text($description);

    // Show the modal
    let infoModal = new bootstrap.Modal(document.getElementById('infoModal'), { // creates new instance of the info modal so it works for all cards.
      keyboard: true // if user clicks escape modal closes
    });
    infoModal.show();
  });


  // Schedule JS

  $('#SetUp').on('click', function () {
    $('#infoBox1').slideToggle();
 
  });

  $('#EventTime').on('click', function () {
    $('#infoBox2').slideToggle();
  
  });

  $('#WrapUp').on('click', function () {
    $('#infoBox3').slideToggle();
   
  });
})
