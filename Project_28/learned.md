# What I learned with this project

# Fetching API with Axios (instead of Fetch)

--> Easier to use : better error handling

const API_URL = 'https://api.github.com/users/'

// With .then :
function getUser(username) {  
    axios(API_URL + username)
        .then(res => console.log(res.data))
        .catch(err => console.log(err)) // in case something goes wrong
}

// With async await :
async function getUser(username) {  
    try {
        const res = await axios(API_URL + username)
        console.log(res.data)
    } catch(err) {
        console.log(err)
    }
     
}