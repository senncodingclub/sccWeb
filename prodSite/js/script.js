$(document).ready(function () {
    $('div.hidden').fadeIn(1000).removeClass('hidden');
    $('div.hiddenPanel1').fadeIn(1000).removeClass('hiddenPanel1');
    $('div.hiddenPanel2').fadeIn(1000).removeClass('hiddenPanel2');
    $('div.hiddenPanel3').fadeIn(1000).removeClass('hiddenPanel3');
    $(document).click(function () {
        $('div.hidden').removeClass('hidden');
        $('div.hiddenPanel1').removeClass('hiddenPanel1');
        $('div.hiddenPanel2').removeClass('hiddenPanel2');
        $('div.hiddenPanel3').removeClass('hiddenPanel3');
    });
});

