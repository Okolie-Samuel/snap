/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn1")) {
    var dropdowns = document.getElementsByClassName("dropdown-content1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// toggle icon images onclick
$(".dropbtn").on("click", function () {
  $("i", this).toggleClass("fa-solid fa-angle-down fa-solid fa-angle-up");
});
$(".dropbtn1").on("click", function () {
  $("i", this).toggleClass("fa-solid fa-angle-down fa-solid fa-angle-up");
});

$(document).ready(function () {
  $(".popup-btn").click(function () {
    var popupBlock = $("#" + $(this).data("popup"));
    popupBlock
      .addClass("active")
      .find(".fade-out")
      .click(function () {
        popupBlock
          .css("opacity", "0")
          .find(".popup-content")
          .css("margin-top", "350px");
        setTimeout(function () {
          $(".popup").removeClass("active");
          popupBlock
            .css("opacity", "")
            .find(".popup-content")
            .css("margin-top", "");
        }, 600);
      });
  });
});

function passwordToggle() {
  let x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

let nameField = document.getElementById("name");
let numberField = document.getElementById("phone");
let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");

// function validate(e) {
//   e.preventDefault();
//   if (!nameField.checkValidity()) {
//     swal({
//       title: "oops!",
//       text: "you entered invalid details",
//       icon: "error",
//     });
//   } else {
//     swal({
//       title: "Good JOb!",
//       text: "registration complete",
//       icon: "success",
//     });
//   }
// }
// function formCall() {
//   $("#send").validate({
//     submitHandler: function (e) {
//       e.preventDefault();
//       $.ajax({
//         url: url,
//         type: "POST",
//         data: $("#send").seriaize(),
//         success: function () {
//           console.log("working");
//           // swal({
//           //   title: "Good JOb!",
//           //   text: "registration complete",
//           //   icon: "success",
//           // });
//         },
//         error: function () {
//           console.log("not working");
//           // swal({
//           //   title: "oops!",
//           //   text: "you entered invalid details",
//           //   icon: "error",
//           // });
//         },
//       });
//     },
//   });
// }

function formCall(e) {
  e.preventDefault();
  $.ajax({
    method: "POST",
    data: $("#send").serialize(),
    success: console.log("test"),
  });
}
