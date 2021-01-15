$(document).ready(function() {
  $("form#programming").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const color = $("input#color").val();
    const gaming = $("input#gaming").val();
    const mobile = $("input#mobile").val();
    const web = $("input#web").val();
    if (gaming === yes && mobile === yes) {
      $('#java').show();
    }
  });
});