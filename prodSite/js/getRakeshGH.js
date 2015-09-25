$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/rakeshdas1/repos',
        data: {get_param: 'value'},
        dataType: 'json',
        success: function (data) {
           $.each(data, function(idx, obj) {
               $("#repos").append("<a href=" + obj.html_url + "><b><p>"+obj.name+"</p></b></a>");
               $("#repos").append("<a href=" + obj.owner.html_url + ">" + "<p>"+obj.owner.login+"</p>" + "</a>");
               $("#repos").append("<p>"+obj.description+"</p>");
        });
        }
    });
});
