$(".opened_eye").click(function () {
    $(this).hide();
    $(this).parents(".form-group").find(".closed_eye").show();
    $(".form-control").attr("type", "text");
});

$(".closed_eye").click(function () {
    $(this).hide();
    $(this).parents(".form-group").find(".opened_eye").show();
    $(".form-control").attr("type", "password");
});