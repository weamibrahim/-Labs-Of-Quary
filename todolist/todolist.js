 $(document).ready(function(){
  $('#btn').on("click",function(){
        
    var text=$("input").val()
    if(text==='')
    {alert("you should enter value")}
    else{
     $("ul").append('<li  >'+text+'<button class="delete">delete</buuton><button class="complete">complete</button></li>')
    $("input").val('')
    
}

})

    $('ul').on('click','.delete',function () {
       
       $(this).parent('li').remove()
       

    })

    $('ul').on('click','.complete',function () {
        $(this).parent('li').toggleClass('finish')
    })
   
})


