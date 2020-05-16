// import Axios from "axios";

//-----SHORTHAND FUNCTIONS-----
// const element = (el) => {
//   document.createElement(el)
// };

// const append = (parent, child) => {
//   parent.appendChild(child)
// };

// const text = (parent, content) => {
//   parent.textContent = content
// };

// const classes = (parent, cla) => {
//   parent.classList.add(cla)
// };
//-----SHORTHAND FUNCTIONS-----

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
axios.get('https://cors-anywhere.herokuapp.com/https://api.github.com/users/chris-westberg')
.then (response => {
  console.log(response.data)
  let cards = document.querySelector('.cards')
  cards.appendChild(cardMaker(response.data))
  // append(cards, cardMaker(response.data))

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
    follow this link in your browser https://api.github.com/users/chris-westberg/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

followersArray.forEach(name => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://api.github.com/users/${name}`)
  .then(response => {
    let cards = document.querySelector('.cards')
    cards.appendChild(cardMaker(response.data))
  })
  .catch(err => {
    console.log(err)
  })
})

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
  const card = document.createElement('div')
  card.classList.add('card')
  // card.textContent = '\u25bc'
   card.addEventListener('click', event => {
     card.classList.toggle('card-open')
   })

  //---Image---
  const image = document.createElement('img')
  card.appendChild(image)
  image.setAttribute('src', object.avatar_url)
  // console.log(image)

  //---Card-info div---
  const cardInfo = document.createElement('div')
  // classes(cardInfo, 'card-info')
  cardInfo.classList.add('card-info')
  // append(card, cardInfo)
  card.appendChild(cardInfo)

  //---Name H3---
  // const name = element('h3')
  const name = document.createElement('h3')
  // classes(name, 'name')
  name.classList.add('name')
  // append(cardInfo, name)
  cardInfo.appendChild(name)
  // text(name, 'Chris Westberg')
  name.textContent = object.name

  //---Username p---
  // const username = element('p')
  const username = document.createElement('p')
  // classes(username, 'username') 
  username.classList.add('username')
  // append(cardInfo, username)
  cardInfo.appendChild(username)
  // text(username, 'chris-westberg')
  username.textContent = object.username

  //---Location p---
  // const location = element('p')
  const location = document.createElement('p')
  // text(location, `Location: ${location}`)  <-------- THIS
  location.textContent = `Location: ${object.location}`
  // append(cardInfo, location)
  cardInfo.appendChild(location)

  //---Profile p---
  // const profile = element('p')
  const profile = document.createElement('p')
  // text(profile, 'Profile:')
  profile.textContent = 'Profile:'
  // append(cardInfo, profile)
  cardInfo.appendChild(profile)

  //---profile link---
  // const profLink = element('a')
  const profLink = document.createElement('a')
  profLink.setAttribute('href', object.avatar_url)
  profLink.textContent = object.url
  // append(profile, profLink)
  profile.appendChild(profLink)

  //---Followers p---
  // const followers = element('p')
  const followers = document.createElement('p')
  followers.textContent = `Followers: ${object.followers}`
  cardInfo.appendChild(followers)

  //---Following p---
  const following = document.createElement('p')
  following.textContent = `Following: ${object.following}`
  cardInfo.appendChild(following)

  //---Bio p---
  const bio = document.createElement('p')
  bio.textContent = `Bio: ${object.bio}`
  cardInfo.appendChild(bio)

  //---Email p---
  const email = document.createElement('p')
  email.textContent = `Email: ${object.email}`
  cardInfo.appendChild(email)

  //---Updated p---
  var updation = document.createElement('p')
  updation.textContent = `Last updated: ${object.updated_at}`
  cardInfo.appendChild(updation)


  return card
}
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/