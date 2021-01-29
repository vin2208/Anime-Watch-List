//Slecting all todos

$("ul").on("click","span",function(Event){
    $(this).parent().fadeOut(1000,function(){
        $(this).remove();    });
    Event.stopPropagation();

   
}
    );


$("ul").on("click","li",function()
{
$(this).toggleClass("completed");
});

$("input").keypress(function(event){
    
    if(event.which===13)
    {
        console.log("Enter daba hai be");
        var todox=$(this).val();
        console.log(todox);
        $("ul").append("<li><span> X  </span> " + todox + "</li>")
    }
})