$(document).ready(function () {
  $("#menu").click(function () {
    $(this).toggleClass("fa-times");
    $("header").toggleClass("toggle");
  });

  $(window).on("scroll load", function () {
    $("#menu").removeClass("fa-times");
    $("header").removeClass("toggle");

    if ($(window).scrollTop() > 0) {
      $(".top").show();
    } else {
      $(".top").hide();
    }
  });

  // smooth scrolling

  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });
});

//  function sendEmail(){
//    Email.send({
//         Host:"smtp.gmail.com" ,
//         username:"azadvocalss@gmail.com",
//        password: "9939264896",
//        To:'azadvocalss@gmail.com',
//         From:document.getElementById("email").value,
//         subject:"New Contact for enquiry",
//        Body:"Name: " + document.getElementById("name").value
//        +"<br> Email:"+document.getElementById("email").value
//        +"<br> Contact no:"+document.getElementById("contact no.").value
//        +"<br> Message:"+document.getElementById("message").value
//     }).then(

//     message=>alert("message sent successfully")
//    );
//  }
