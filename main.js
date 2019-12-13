window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);

const artists = urlParams.get("artist");

function init(){
  if(artists){
        getArtistsData();
  }
  else{
      console.log("wtf");
  }
}

function getArtistsData(){
    //console.log("getArtistsData")
    fetch("http://mycreativedigitalvision.eu/WP/wordpress/wp-json/wp/v2/artist")

    .then(res=>res.json())
    .then(handleArtists)
}
function handleArtists(myData){
    console.log(myData)
    myData.forEach(showArtists)
}

function showArtists(artist){
    console.log(artist)

    const template = document.querySelector("template").content;
    const postCopy = template.cloneNode(true);

    const h1 = postCopy.querySelector("h1");
    h1.innerHTML = artist.title.rendered;

    const artist_image = postCopy.querySelector(".artist_image");
    artist_image.src = artist.image_artist.guid;

    const artist_text = postCopy.querySelector(".artist_text");
    artist_text.innerHTML = artist.text_artist;

    document.querySelector("#artists").appendChild(postCopy)
}