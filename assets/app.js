$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#sidebar').toggleClass('active-small');
        $("#content").toggleClass('ml');
        $("#content").toggleClass('ml-small');
        $(".header").toggleClass('lg-desc-2');

    });
});


$(document).ready(function () {
    $('#dataTable').DataTable();
});