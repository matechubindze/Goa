async function load() {
    let r = await fetch("https://jsonplaceholder.typicode.com/posts")
    let d = await r.json()
    console.log(d)
}

load()
