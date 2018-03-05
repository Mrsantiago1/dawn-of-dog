var webUrl ="https://dog.ceo/api/breeds/image/random"

$("#getPup").on("click",function (response){
  alert("right click: inspect console, open 'image' URL")
  $.ajax({
    url: webUrl,
    success: function(response){
      $(".dogPic").attr(response);
      console.log(response);
      //$("<ul>").append("<li>"+json.results[1].title+"</li>")
      //  r.forEach(function(e){
  //  })
    },
    error: function(damn){
      console.log(damn);
    }
  })
})

//add complex api of specific dog breed pictures
