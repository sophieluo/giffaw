console.log("js linked!");


$(document).on("ready", function(){

$('form').on('submit', function(event){
  event.preventDefault();
  var $queryData = $("form").serialize();
  $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search",
      data: $queryData,
      success: onSuccess,
      error: onError
  });
});

  function onSuccess(json) {
    for (var i=0;i<json.data.length;i++) {
      var successGif = json.data[i].images.fixed_height.url;
      $(".gif-gallery").append("<img src='"+successGif+"'>");
  }
}

  function onError(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
  }

$('button').on('click', function(event) {
  $(".gif-gallery").append('<form class="form-inline" method="GET" action="http://api.giphy.com/v1/gifs/search">')
})

});
