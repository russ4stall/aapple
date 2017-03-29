var $ = require('jquery');

$(function() {
    console.log( "ready!" );
    $("#main-body").click(function() {
        console.log("clicked!!");
    });
});