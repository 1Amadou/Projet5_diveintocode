const button = document.getElementById("btn");
const titleArea = document.getElementById("btn");
const contentArea = document.getElementById("btn");
const videoArea = document.getElementById("btn");

let index = 0
let data = [];

  function getData() {
    const request = new XMLHttpRequest();
    request.open("GET , ajax.json");
    request.responseType = "json";
    request.onreadystatechange = function(){
      if(request.readyState == 4){
        if(request.status == 200){
          data = request.response;
        }
      }
    }
  
  };

  function changeVideo() {
    if(!data.length)getData();
    button.onclick = function(){
       titleArea.innerHTML = data[index].title;
       contentArea.innerHTML = data[index].content;
       videoArea.setAttribute("src", data[index].url);
       index++;
       if (index == data.length) index = 0

    };
  }
  
window.onload = changeVideo ;