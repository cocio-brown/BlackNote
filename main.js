window.addEventListener("DOMContentLoaded", init);

function init() {
    if (window.location.href.indexOf("artists") > -1) {
        getArtists();
        console.log("artists")
    } else if (window.location.href.indexOf("gallery") > -1) {
        getGallery();
        console.log("gallery")
} else if (window.location.href.indexOf("contact") > -1) {
    getContact();
    console.log("contact")
} else if (window.location.href.indexOf("about") > -1) {
    getAbout();
    console.log("about")
} else {
    getArtists();
   
}
}


function getPages(){
    console.log("getPages")
    fetch ("http://mycreativedigitalvision.eu/WP/wordpress/wp-json/wp/v2/pages")

    .then(res=>res.json())
    .then(handlePages)
}

function handlePages(myData){
    console.log(myData)
    myData.forEach(showPages)
}

function showPages(pages){
    console.log(pages)
}

function getArtists(){
    //console.log("getArtists")
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

function getAbout(){
    //console.log("getAbout")
    fetch ("http://mycreativedigitalvision.eu/WP/wordpress/wp-json/wp/v2/pages/397")
     
      .then(res=>res.json())
      .then(showAbout)
      }
    

function showAbout(about){
    console.log(about)

    const template = document.querySelector("template").content;
    const postCopy = template.cloneNode(true);
    const p = postCopy.querySelector("p");
    p.innerHTML = about.content.rendered;

    document.querySelector("#about").appendChild(postCopy)
}

function getGallery(){
    //console.log("getGallery")
    fetch ("http://mycreativedigitalvision.eu/WP/wordpress/wp-json/wp/v2/pages/401")

    .then(res=>res.json())
    .then(showGallery)
}

function showGallery(gallery){
    console.log(gallery)

    const template = document.querySelector("template").content;
    const postCopy = template.cloneNode(true);
    const p = postCopy.querySelector("p");
    p.innerHTML = gallery.content.rendered;

    document.querySelector("#gallery").appendChild(postCopy)
}

function getContact(){
    //console.log("getContact")
    fetch("http://mycreativedigitalvision.eu/WP/wordpress/wp-json/wp/v2/pages/399")

    .then(res=>res.json())
    .then(showContact)
}

function showContact(contact){
    console.log(contact)

    const template = document.querySelector("template").content;
    const postCopy = template.cloneNode(true);
    const p = postCopy.querySelector("p");
    p.innerHTML = contact.content.rendered;

    document.querySelector("#contact").appendChild(postCopy)
}