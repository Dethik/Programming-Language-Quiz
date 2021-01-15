$(document).ready(function() {
  $("form#programming").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const color = $("#color").val();
    const gaming = $("#gaming").val();
    const mobile = $("#mobile").val();
    const web = $("#web").val();
    const broad = $("#broad").val();
    const animal = $("input#animal").val();
    $('.nameInput').text(name);
    if (gaming === "yes" && mobile === "yes") {
      $('#java').fadeIn();
      $('#cplusplus').fadeOut();
      $('#ruby').fadeOut();
      $('#csharp').fadeOut();
      $('#python').fadeOut();
    } 
    else if (gaming === "yes") {
      $('#cplusplus').fadeIn();
      $('#java').fadeOut();
      $('#ruby').fadeOut();
      $('#csharp').fadeOut();
      $('#python').fadeOut();
    }
    else if (web === "yes" && color === "yes") {
      $('#ruby').fadeIn();
      $('#cplusplus').fadeOut();
      $('#java').fadeOut();
      $('#csharp').fadeOut();
      $('#python').fadeOut();
    }
    else if (web === "yes") {
      $('#csharp').fadeIn();
      $('#cplusplus').fadeOut();
      $('#java').fadeOut();
      $('#ruby').fadeOut();
      $('#python').fadeOut();
    }
    else if (broad === "yes") {
      $('#python').fadeIn();
      $('#cplusplus').fadeOut();
      $('#java').fadeOut();
      $('#ruby').fadeOut();
      $('#csharp').fadeOut();
      $('#javascript').fadeOut();
    }
    else if (animal === "Dog") {
      $('#javascript').fadeIn();
      $('#cplusplus').fadeOut();
      $('#java').fadeOut();
      $('#ruby').fadeOut();
      $('#csharp').fadeOut();
      $('#python').fadeOut();
    }
  });
});