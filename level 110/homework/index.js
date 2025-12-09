//N1
async function users() {
    let r = await fetch("https://jsonplaceholder.typicode.com/users")
    let d = await r.json()
    d.forEach(u => console.log(u.name))
}

users()
//N2
async function badRequest() {
    try {
        let r = await fetch("https://jsonplaceholder.typicode.com/invalidlink")
        let d = await r.json()
        console.log(d)
    } catch(e) {
    console.log("error happened")
    }
}

badRequest()
//N3
async function getData() {
    let tries = 0
    while(tries < 3) {
    try {
        let r = await fetch("https://jsonplaceholder.typicode.com/posts")
        let d = await r.json()
        console.log(d)
        return
    } catch(e) {
        tries++
    }
    }
    console.log("failed after 3 tries")
}

getData()
//N4
async function chain() {
    let r1 = await fetch("https://jsonplaceholder.typicode.com/posts")
    let posts = await r1.json()

    let first = posts[0]

    let r2 = await fetch("https://jsonplaceholder.typicode.com/users/" + first.userId)
    let user = await r2.json()

    console.log(first)
    console.log(user)
}

chain()
