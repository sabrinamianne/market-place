$(document).ready(function(){
  $("#formOne").submit(function(event) {
    alert($("#number"));
    var numberInput = $(".number").number(numberInput).val();
    //var products = $("#products").val();
    //$(#Panier).show();

    event.preventDefault();

  });
});
