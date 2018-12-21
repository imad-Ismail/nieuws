
var nData = (JSON.parse(localStorage.getItem("nieuwsData")));
  var nId = localStorage.getItem("id");
  articles(nId, nData);
  function articles(nummer, nieuwsData){
  if(nieuwsData.articles[nummer].urlToImage == null){
  }else{
  document.getElementById('artid').innerHTML = (
    '<div class="container">' +
      '<div class="row">'+
        '<img src="' +
          nieuwsData.articles[nummer].urlToImage +
          '" style="width: 100%; height: 100%;">' +
      '</div>'+

      '<div class="row text-center">' +
        nieuwsData.articles[nummer].title +
      '</div>' +

      '<div class="row text-center">' +
        nieuwsData.articles[nummer].description +
      '</div>' +

      '<div class="row text-center">' +
        nieuwsData.articles[nummer].content +
      '</div>' +
    '</div>'
  );
  }
};