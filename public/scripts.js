

const clickMe = () => {
    alert("Go to Coles and buy me, Thanks!")
}
$(document).ready(function () {
    // $('.materialboxed').materialbox();
    $('#myButoon').click(() => {
        clickMe();
    })
    $('#myButoon2').click(() => {
      clickMe();
  })
    $("button").click(function(){
        $.ajax({url: "addTwoNumber", success: function(result){
          $("#div1").html(result);
        }});
      });
});

