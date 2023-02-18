
$("document").ready(function(){
    $("img").draggable()
    $("img").hover(function(){
        $("img").effect("shake")
      })
     
    $("div").droppable(
        {
            drop:function(event,ui){
                $("img").hide('blind')
            }
        }
    )
})


