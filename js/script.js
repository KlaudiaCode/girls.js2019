let dataURL = 'https://api.nasa.gov/planetary/apod?api_key=zMxXaKvzOxIMylc1KWKvmdm7Vk5zM4oxlw0SVUoB';
let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=zMxXaKvzOxIMylc1KWKvmdm7Vk5zM4oxlw0SVUoB";
let gallery = document.getElementById('content');

function changeBackground(imageURL) { 
    document.body.style.backgroundImage = "url('" + imageURL + "')";
}
function createGallery(dataList) {
    for(let i = 0; i < 9; i++) {
        let img = document.createElement('img');
        let imgPath = dataList[i].img_src;
        img.src = imgPath; 
        gallery.appendChild(img); // metoda- wstawienie nowego elementu do diva content/ appendChild(nazwa_wstawianego_elementu)
    }
}
function getPicture() { 
    fetch(dataURL)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            changeBackground(data.hdurl);
        });
}
function getMarsPicture(){ 
    fetch(urlMars)
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            let pictureList = data.photos; // przypisanie tablicy img do zmiennej
            createGallery(pictureList); 
        });
}
getPicture();
getMarsPicture();

