document.getElementById("button").addEventListener('click',function(){ 
   var input = document.querySelector("input").value;
   console.log(input);
   search(input);
  pushToDOM(input);
});

document.getElementById("input").addEventListener('keyup',function(e){ 
   var input = document.querySelector("input").value;
   if(e.which===13){
   console.log(input);
   search(input);
   pushToDOM(input);
}
});

function search(input){
var url = "https://api.giphy.com/v1/gifs/search?api_key=9iGb3jz2DKGKO2hXsRgWFwbozOv7ruTL&limit=25&offset=0&rating=g&lang=en&q=" + input;

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open( 'GET', url );
GiphyAJAXCall.send();
GiphyAJAXCall.addEventListener('load',function(e){
  var data = e.target.response;
  pushToDOM(data);
})
}

function pushToDOM(input) {
var response = JSON.parse(input);
// console.log(response);
// var imageURL = response.data[24].images.fixed_height.url;
// console.log(imageURL);
var imageUrls = response.data;

  imageUrls.forEach(function(image){

    var src = image.images.fixed_height.url;
    console.log(src);


  var container = document.querySelector("#main");
  container.innerHTML += "<img src=\""+ src +"\"class=\"main\">";
});
}
