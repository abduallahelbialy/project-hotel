$(document).ready(function () {
  $(".fancybox").fancybox({
    openEffect: "none",
    closeEffect: "none",
  });

  $(".zoom").hover(
    function () {
      $(this).addClass("transition");
    },
    function () {
      $(this).removeClass("transition");
    }
  );
});

$(document).ready(function () {
$(".bublog").click(function(){
  $('.blo').fadeToggle(100)
});
})
// testmimonall////

let currentTestimonial = 1;

function showTestimonial(testimonialNumber) {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial) => {
    testimonial.style.display = "none";
  });

  const currentTestimonialElement = document.getElementById(
    `testimonial${testimonialNumber}`
  );
  currentTestimonialElement.style.display = "block";
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial % 2) + 1;
  showTestimonial(currentTestimonial);
}

// Display the first testimonial initially
showTestimonial(currentTestimonial);

// Auto-advance testimonials every 5 seconds (adjust as needed)
setInterval(nextTestimonial, 3000);



// lodar////
let lod = document.querySelector(".loader");
window.onload=function () {
  $(".loader"). fadeOut(1000);
}


///rooms
function showCategory(category) {
  const galleries = document.querySelectorAll(".gallery");
  galleries.forEach((gallery) => {
    gallery.style.display = "none";
  });

  const selectedGallery = document.getElementById(category);
  selectedGallery.style.display = "flex";
}

//logo
function submitForm() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Add your authentication logic here
  // For simplicity, let's just display an alert with the entered username and password
  alert("Username: " + username + "\nPassword: " + password);
}




