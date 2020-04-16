// jshint esversion: 6

let main = function(){

    let requestURL = "https://thejsway-server.herokuapp.com/api/articles";

  $.getJSON(requestURL, function(response) {
    let firstArticle = response[0];
    console.log(`Article ${firstArticle.id}
      Title: ${firstArticle.title}
      Content: ${firstArticle.content}`);

    response.forEach(function(item, index) {

      let newDiv = document.createElement("div");
      document.querySelector(".b").appendChild(newDiv);

      let header = document.createElement("p");
      header.textContent = `Article ${item.id}`;
      newDiv.appendChild(header);

      let title = document.createElement("p");
      title.textContent = item.title;
      newDiv.appendChild(title);

      let content = document.createElement("P");
      content.textContent = item.content;
      newDiv.appendChild(content);

    });
  });
};


$(document).ready(main);
