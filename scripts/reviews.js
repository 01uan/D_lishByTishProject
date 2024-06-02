"use strict";

$(document).ready(function() {
    $("#commentform").validate({
        rules:{
            "name": {
                required: true
            },
            "comment":{
                required: true
            }
        },
        messages: {
            "name":{
                required: "A name must be provided."
            },
            "comment": {
                required: "Please enter comment."
            }
        }
    });
});
