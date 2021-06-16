const form = document.querySelector('#form')
const search = document.querySelector('#search')
const container = document.querySelector('#github-container')

const API_URL = 'https://api.github.com/users/'

async function getUser(username) {
    try {
        const res = await axios(API_URL + username)
       // console.log(res)
        container.innerHTML = `
        <div class="profile-pic">
        <img src="${res.data.avatar_url}">
    </div>
    <div class="infos">
        <h1 class="name">${res.data.login}</h1>
        <h3 class="description">${res.data.bio}</h3>
        <div class="follow-infos">
            <span>${res.data.followers} Followers</span>
            <span>${res.data.following} Following</span>
            <span>${res.data.public_repos} Repos</span>
        </div>
       
    </div>
   
        `
    } catch(err) {
        console.log(err)
        container.innerText = `Sorry. This username doesn't exist`
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(API_URL + username + '/repos')
        console.log(data)
        if(data && data.length >0) { 
            let repoContainer = document.createElement('div')
            repoContainer.classList.add('repos-container')
            document.querySelector('.infos').appendChild(repoContainer)
            data.forEach((repo, idx) => {
                if (idx<=4) {
                    let repoDiv = document.createElement('div')
                    console.log(repoDiv)
                    repoDiv.innerHTML= `<a href='${repo.html_url}'>${repo.name}</a>`
                    repoContainer.appendChild(repoDiv)
                }
            })
        } 
       
    } catch (err) {
        console.log(err)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getUser(search.value)
    getRepos(search.value)
    search.value = '';
    //add the class to the github-container div
    container.classList.add('github-container')
})