// Image source url
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// Fetch the data in the url
fetch(imgUrl)
// Converts the server response to json type
.then(res => res.json())
/*
For each of the dogs, create an img element
img source is imgUrl
Append the img as a child to unordered list
*/
.then(result => result.message.forEach(imgUrl => {const img = document.createElement("img");img.src = imgUrl;document.querySelector("body").appendChild(img)}));

// Image source url
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

let dogBreeds = [];
// Function adds dogs to the list
function addDogs(breedList){
    // Pushes key to the empty array
    for(let key in breedList) {dogBreeds.push(key)}
    /*
    Targets the unordered list
    Create a li in the unordered list
    Assign li.textContent to breeds
    Append li to ul
    */
    for(let breeds of dogBreeds) {let ul = document.querySelector('ul');let li = document.createElement('li');li.id = "dog-name";li.textContent = breeds;ul.append(li);}
}
// Fetches the data in the url
fetch(breedUrl)
    // Converts the promise to json file
    .then(res => res.json())
    // Execute the addDogs function
    .then(results => addDogs(results.message))

document.querySelectorAll("li").forEach(dog => {dog.addEventListener('click', () => dog.style.color = "blue")})

const dropdown = document.querySelector(".breed-container").textContent;
dropdown.addEventListener('change', filterBreed());

const filterBreed = () => {
    const breedList = document.querySelector("li");
    for (let i = 0; i < breedList.length; i++){
        let breed = breedList[i];
        if (breed.textContent.charAt[0] === dropdown) {
            breed.style.display = "list-item";
        }else{
            breed.style.display = "none";
        }
    }
}