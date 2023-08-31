fetch ("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then (data => displayDogs(data));

function displayDogs(data) {
  data.message.forEach((el) => {
    let dogImg = document.createElement('img')
    let dogContainer = document.getElementById('dog-image-container')
    dogImg.src = el;
    dogContainer.append(dogImg);
  })
}

fetch ("https://dog.ceo/api/breeds/list/all")
  .then(res => res.json())
  .then (data => displayBreeds(data));

function displayBreeds(data) {
  console.log(data)
  for (el in data.message) {
    let dogBreed = document.createElement('li')
    let dogList = document.getElementById('dog-breeds')
    dogBreed.textContent = el
    dogList.append(dogBreed)
    dogBreed.addEventListener('click', () => {
      dogBreed.style.color = "red"
    })
  }
}
