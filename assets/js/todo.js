$("ul").on("click", "li", function (e) {
    $(this).toggleClass("completed", function (e) {});
});

$("ul").on("click", "span", function (e) {
    $(this)
        .parent()
        .fadeOut(function () {
            $(this).remove();
        });
    e.stopPropagation();
});

$("input[type=text]").on("keypress", function (e) {
    if (e.which === 13) {
        var inputText = $(this).val();
        $(this).val("");
        $("ul").append(
            "<li><span><i class='fas fa-trash'></i></span> " +
                inputText +
                "</li>"
        );
    }
});

$(".fa-plus").on("click", function () {
    $("input[type=text]").fadeToggle();
});
