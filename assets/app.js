// $(document).ready(function () {
//   $('#sidebarCollapse').on('click', function () {
//     $('#sidebar').toggleClass('active');
//     $('#sidebar').toggleClass('active-small');
//     $("#content").toggleClass('ml');
//     $("#content").toggleClass('ml-small');
//     $(".header").toggleClass('lg-desc-2');

//   });
// });

// Data Table
$(document).ready(function () {
  $('#dataTable').DataTable();
});


isotope

$(document).ready(function () {
  let selector = $('.all').attr('data-filter');
  $('.reports .grid').isotope({
    filter: selector,

  });
  return false;

});
$(document).ready(function () {
  let btn = $('.state__list');

  btn.click(function (e) {
    $('.state__list button').removeClass("active-port");
    e.target.classList.add("active-port");

    let selector = $(e.target).attr('data-filter');
    $('.reports .grid').isotope({
      filter: selector
    });
    return false;
  });

});
// Dropzone library

var myDropzone = new Dropzone("#kt_dropzonejs_example_1", {
  url: "https://keenthemes.com/scripts/void.php", // Set the url for your upload script location
  paramName: "file", // The name that will be used to transfer the file
  maxFiles: 10,
  maxFilesize: 10, // MB
  addRemoveLinks: true,
  accept: function (file, done) {
    if (file.name == "wow.jpg") {
      done("Naha, you don't.");
    } else {
      done();
    }
  }
});
