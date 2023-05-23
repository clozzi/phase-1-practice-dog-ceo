console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', fetchDogs);
document.addEventListener('DOMContentLoaded', fetchBreeds);

let main = document.querySelector("#dog-image-container")
let dogs = document.querySelector("#dog-breeds")

//dog images from source
function fetchDogs() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then((resp) => resp.json())
  .then((data) => renderImages(data.message));  
}
//render images on site
function renderImages(message) {
  message.forEach(e => {
    const img = document.createElement('img');
    img.src = e;
    main.append(img);
  });
}
//dog breeds from source
function fetchBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => renderBreeds(data.message));
}

function renderBreeds(message) {
  let dogBreeds = Object.keys(message) 
  dogBreeds.forEach(e => {
        const li = document.createElement('li');
        li.innerText = e;
        dogs.append(li);
    })
}

dogs.addEventListener('click', changeColor);

function changeColor() {
  dogs.style.color = "red";
}

/*
let dropdown = document.getElementById("breed-dropdown");
dropdown.addEventListener('click', filterA)
*/

let dropdown = document.getElementById("breed-dropdown");
let text = select.option[select.selectedIndex].text;
console.log(text); 

function filterA() {
  console.log("success!")
}