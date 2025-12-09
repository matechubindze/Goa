async function start() {
    let r = await fetch("https://api.sampleapis.com/movies/action-adventure")
    let d = await r.json()

    let m = document.getElementById("movies")

    d.forEach(x => {
    let b = document.createElement("div")
    b.className = "movie"
    b.innerHTML = `
        <img src="">
        <h4></h4>
    `
    m.appendChild(b)
    })
}

start()
