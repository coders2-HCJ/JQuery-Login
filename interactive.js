var account = {
    username: "khan_academy",
    password: "ka2008"
};
$(document).ready(function() {
    $("form").on("submit", function(event) {
        event.preventDefault();
        if($("#username").val() === account.username && $("#password").val() === account.password) {
            $("body")
                .text("Hooray!")
                .css("font-size", "100px")
                .css("border", "10px dotted orange")
                .css("margin-top", "150px")
                .hide()
                .delay(500)
                .slideDown(1000)
            ;
        }
    });
});
