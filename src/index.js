console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
    fetchImages();
    fetchBreeds();
    filterBreedsByLetter();
})

function fetchImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(images => {
        images.message.forEach(image => appendImages(image))
    });
}

function appendImages(links){
    const container = document.querySelector("#dog-image-container");
    const dogImage = document.createElement("img");
    dogImage.src = links;
    container.appendChild(dogImage);
}

function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(breeds => {
        Object.keys(breeds.message).forEach(breed => appendBreeds(breed))
    });
}

function appendBreeds(breed){
    const container = document.querySelector('#dog-breeds');
    const dogBreed = document.createElement("li");
    dogBreed.innerHTML = breed
    container.appendChild(dogBreed);
    dogBreed.addEventListener("click", changeColor)
}

const changeColor = (e) =>{
e.target.style.color = "red"
}

function filterBreedsByLetter(){

    const ul = document.getElementById("dog-breeds")
    const all_breeds = ul.getElementsByTagName("li")
    const filteredBreed = document.getElementById("breed-dropdown")

    filteredBreed.addEventListener('change', function(e) {
      for (let i = 0; i < all_breeds.length; i++){
        all_breeds[i].style.display = 'block'
        if (all_breeds[i].innerText[0] != e.target.value){
          all_breeds[i].style.display = 'none';
        }
      }      
    });
  }







  