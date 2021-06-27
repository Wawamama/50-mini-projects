const search = document.querySelector('#search')
const content = document.querySelector('.content')
let usersList = []

getData()

search.addEventListener('input', (e) => {
    filterUsers(e.target.value)
})

async function getData() {
    try {
        const { data } = await axios.get('https://randomuser.me/api/?results=50')
        content.innerHTML = ''
        data.results.forEach(user => {
            const profilePic = user.picture.large
            const name = user.name.first + ' ' + user.name.last
            const location = user.location.city + ', ' + user.location.country
            displayUser(name, location, profilePic)
            console.log(usersList)
        })
    } catch(err) {
        console.log(err)
    }
}

function displayUser(name, location, img) {
    const userDiv = document.createElement('div')
    userDiv.classList.add('user')
    userDiv.innerHTML = `
        <div class='user-img'>
            <img src='${img}' alt='user profile pic'>
        </div>
        <div class='user-info'>
            <h3>${name}</h3>
            <small>${location}</small>
        </div>
    `
    usersList.push(userDiv)
    content.appendChild(userDiv)
}

function filterUsers(search) {
    usersList.forEach(user => {
        if (user.innerText.toLowerCase().includes(search.toLowerCase())) {
            user.classList.remove('hide')
        } else {
            user.classList.add('hide')
        }
    })
}