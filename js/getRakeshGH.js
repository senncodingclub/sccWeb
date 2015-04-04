$(document).ready(function(){
    var json = "https://api.github.com/users/rakeshdas1/repos";
    $.each(JSON.parse(json), function(idx, obj) {
        $("#repos").append("<p>"+obj.name+"</p>");
    });
});