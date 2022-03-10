$(document).ready(function(){
    $("#blanks form").submit(function(){
        $(".person1").append("blah blah");
        $(".person2").append("bleh bleh");
        $(".animal").append("bli bli bl");
        $(".exclamation").append("bloh bloh bloh");
        $(".verb").append("bloh bloh bloh");
        $(".noun").append("blu blu blu");

        $("#story").show();
        event.preventDefault();
    });
});