const { list } = require("mocha/lib/reporters/base");

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

// Access the content of the dropdown
const dropdown1 = document.querySelector("#a").textContent;
const dropdown2 = document.querySelector("#b").textContent;
const dropdown3 = document.querySelector("#c").textContent;
const dropdown4 = document.querySelector("#d").textContent;

const list = document.querySelector("#dog-name").textContent;

// Add event listener to the dropdown
document.addEventListener('change', () => {
    const option = list.split(" ");
    // Create a list of the contents of the list
    // for (let i = 0; i < list.length; i++){
    if (dropdown1 === option.charAt[0]){
        option.remove("hidden");
    }else if(dropdown2 === option.charAt[0]){
        return option;
    }else if(dropdown3 === option.charAt[0]){
        return option;
    }else if(dropdown4 === option.charAt[0]){
        return option;
    }else{
        return;
    }
    // }
})