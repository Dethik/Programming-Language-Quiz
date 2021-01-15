$(document).ready(function() {
  $("form#programming").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const color = $("input#color").val();
    const gaming = $("input#gaming").val();
    const mobile = $("input#mobile").val();
    const web = $("input#web").val();
    const broad = $("input#broad").val();
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
      $();
      $();
    }
    else if (web === "yes" && color === "yes") {
      $('#ruby').show();
      $('#cplusplus').hide();
      $('#java').hide();
      $();
      $();
    }
    else if (web === "yes") {
      $('#csharp').show();
      $();
      $();
      $();
      $();
    }
    else if (broad === "yes" && animal === "yes") {
      $('python').show();
      $();
      $();
      $();
      $();
    }
  });
});