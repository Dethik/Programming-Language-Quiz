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
    if (gaming === "yes" && mobile === "yes") {
      $('#java').show();
      $('#cplusplus').hide();
      $('#ruby').hide();
      $('#csharp').hide();
      $('#python').hide();
    } 
    else if (gaming === "yes") {
      $('#cplusplus').show();
      $('#java').hide();
      $('#ruby').hide();
      $('#csharp').hide();
      $('#python').hide();
    }
    else if (web === "yes" && color === "yes") {
      $('#ruby').show();
      $('#cplusplus').hide();
      $('#java').hide();
      $('#csharp').hide();
      $('#python').hide();
    }
    else if (web === "yes") {
      $('#csharp').show();
      $('#cplusplus').hide();
      $('#java').hide();
      $('#ruby').hide();
      $('#python').hide();
    }
    else if (broad === "yes") {
      $('#python').show();
      $('#cplusplus').hide();
      $('#java').hide();
      $('#ruby').hide();
      $('#csharp').hide();
    }
  });
});