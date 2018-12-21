// var url = 'https://newsapi.org/v2/everything?' +
//           'q=syria&' +
//           'from=2018-12-19&' +
//           'sortBy=popularity&' +
//           'apiKey=c7b55f0dfc3843f9a27b5defe5b2b77d';

// var req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     });

    /*end search*/


var url = 'https://newsapi.org/v2/top-headlines?' +
          'country=us&' +
          'apiKey=c7b55f0dfc3843f9a27b5defe5b2b77d';

fetch(url)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
          setData(data);
      		showNews(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
        
  function showNews(data){
  		        // console.log(data);
    if(data.articles[0].urlToImage == null){
      document.getElementById('imgcarousel1').innerHTML = (
          '<img src="' +
          data.articles[1].urlToImage +
          '" style="width: 90%; margin-top: 40px;">');
        document.getElementById('h5carousel1').innerHTML = data.articles[1].description;
        document.getElementById('pcarousel1').innerHTML =  data.articles[1].title;

    }else if(data.articles[1].urlToImage == null){
      document.getElementById('imgcarousel1').innerHTML = (
          '<img src="' +
          data.articles[2].urlToImage +
          '" style="width: 90%; margin-top: 40px;">');
        document.getElementById('h5carousel1').innerHTML = data.articles[2].description;
        document.getElementById('pcarousel1').innerHTML =  data.articles[2].title;
    }else {
        document.getElementById('imgcarousel1').innerHTML = (
        	'<img src="' +
        	data.articles[0].urlToImage +
        	'" style="width: 90%; margin-top: 40px;">');
        document.getElementById('h5carousel1').innerHTML = data.articles[0].description;
        document.getElementById('pcarousel1').innerHTML =  data.articles[0].title;

          for (i = 1; i < data.articles.length; i++) {
             articles(i, data);
          }
};
function articles(nummer, data){
  setId(nummer);
  if(data.articles[nummer].urlToImage == null){
    document.getElementById('maindivfoto' + nummer).style.display = "none";
    
  }else{
  document.getElementById('maindivfoto' + nummer).innerHTML = (
  '<div class="col" id="art' + nummer + '" onclick="setId(' + nummer +
    ')"> <a href="artikel.php?id=art' + nummer + '"> <p>' +
     data.articles[nummer].title + '</p></div>'
  + '<div " onclick="setId(' + nummer +
    ')" class="col foto" id="fotoart' + nummer
   + '">' + '<img src="' +
          data.articles[nummer].urlToImage +
          '" style="width: 100%; height: 100%;"> </a> </div>'    
  );
  }
};
};

 function setData (data){
  localStorage.setItem("nieuwsData", JSON.stringify(data));

};

function setId(nummer){
  localStorage.setItem("id" , nummer);
};