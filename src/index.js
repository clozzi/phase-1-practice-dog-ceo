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

let dogList = document.getElementById('dog-breeds')

function displayBreeds(data) {
  for (el in data.message) {
    let dogBreed = document.createElement('li')
    dogBreed.textContent = el
    dogList.append(dogBreed)
    dogBreed.addEventListener('click', () => {
      dogBreed.style.color = "red"
    })
  }
}

const dropdown = document.getElementById('breed-dropdown')
// dropdown.addEventListener('click', dropdownAction);

// function dropdownAction() {
//   const dropdownPick = document.getElementById('breed-dropdown').value;
//   console.log(dropdownPick);
//   dogList
// }

dropdown.addEventListener('change', () => {
  const dropdownPick = document.getElementById('breed-dropdown').value;
  const liList = document.getElementsByTagName('li')
  for (let i=0; i < liList.length; i++) {
    let listItem = liList[i].innerHTML;
    if (listItem.charAt(0) === dropdownPick) {
      liList[i].style.display = 'list-item';
    }
      else {
        liList[i].style.display = 'none'
      }
    }
  })