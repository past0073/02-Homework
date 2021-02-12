$("#captureContact").on("click", function(){
    console.log($("#name").val())
    console.log($("#email").val())
    console.log($("#message").val())
   
    $(".contact-section").empty();
    $(".form-group").html("Thank you!");
})

let name = $("#name").val();
let email = $("#email").val();
let message = $("#message").val();

