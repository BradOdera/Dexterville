$(document).ready(function() {
    $('#title1').hide();
    $('#title2').hide();
    $('#title3').hide();
    $('#desiPara').hide();
    $('#devPara').hide();
    $('#proPara').hide();
});
$(document).ready(function() {
    $('#design').click(function() {
        $('img#icon1').toggle();
        $('label#icon1').toggle();
        $('h4#title1').toggle();
        $('p#desiPara').toggle();
    });
});
$(document).ready(function() {
    $('#dev').click(function() {
        $('img#icon2').toggle();
        $('label#icon2').toggle();
        $('h4#title2').toggle();
        $('p#devPara').toggle();
    });
});