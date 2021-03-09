const imageContainer = document.getElementById('image-container');

const count = 10;
const apiKey = 'YFyPyzsR3Urpdqrs1DNgG9mlUrXRqQ4lWwoilhyqSUc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Function to Set Attributes on DOM Elements
function setAttributes(el, obj){
    for(prop in obj){
        el.setAttribute(prop, obj[prop]);
    }
}

// Create Element For Links & Photos, Add to DOM
function displayData(photos){
    photos.forEach((photo) => {
        // create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })
        // create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })
        // put <img> inside <a> then puth both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

// Get photos from Unsplash API
async function getPhotos(){
    try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        displayData(data);
    } catch (error) {
        console.log('Oops', error);
    }
}

// On load
getPhotos();