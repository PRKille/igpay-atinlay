$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        var sentenceInput = $("input#sentence").val();
        if (!sentenceInput) {
            alert("Please enter some text.")
        } else {
            
        }
    });
});