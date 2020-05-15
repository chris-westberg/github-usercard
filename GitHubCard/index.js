// import Axios from "axios";

//-----SHORTHAND FUNCTIONS-----
const element = (el) => {
  document.createElement(el)
}

const append = (parent, child) => {
  parent.appendChild(child)
}

const text = (parent, content) => {
  parent.textContent = content
}

const classes = (parent, cla) => {
  parent.classList.add(cla)
}
//-----SHORTHAND FUNCTIONS-----

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/chris-westberg')
.then (response => {
  // console.log(response.data)
  let cards = document.querySelector('.cards')
  append(cards, cardMaker(response.data))
})
.catch(err => {
  console.log(err)
})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
let cardMaker = (object) => {
  //---Card div---
  const card = element('div')
  classes(card, 'card')

  //---Image---
  const image = element('img')
  append(card, image)
  image.setAttribute('src', object.avatar_url)
  console.log(image)

  //---Card-info div---
  const cardInfo = element('div')
  classes(cardInfo, 'card-info')
  append(card, cardInfo)

  //---Name H3---
  const name = element('h3')
  classes(name, 'name')
  append(cardInfo, name)
  text(name, 'Chris Westberg')

  //---Username p---
  const username = element('p')
  classes(username, 'username')
  append(cardInfo, username)
  text(username, 'chris-westberg')

  //---Location p---
  const location = element('p')
  // text(location, `Location: ${location}`)  <-------- THIS
  append(cardInfo, location)

  //---Profile p---
  const profile = element('p')
  text(profile, 'Profile:')
  append(cardInfo, profile)

  //---profile link---
  const profLink = element('a')
  // profLink.setAttribute('href', link)  <--------- THIS
  append(profile, profLink)

  //---Followers p---
  const followers = element('p')



}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

let funcion = function() {

}