let body = document.body
let savedTheme = localStorage.getItem('theme')
if (savedTheme) {
    body.className = savedTheme
    } else {
    body.className = 'light'
    }

    document.getElementById('themeToggle').onclick = function() {
    if (body.className === 'light') {
        body.className = 'dark'
    } else {
        body.className = 'light'
    }
    localStorage.setItem('theme', body.className)
    }

    let visits = localStorage.getItem('visits')
    if (visits) {
    visits = Number(visits) + 1
    } else {
    visits = 1
    }
    document.getElementById('visitCount').textContent = visits
    localStorage.setItem('visits', visits)

    let fields = ['name','email','message']
    for (let i = 0; i < fields.length; i++) {
    let input = document.getElementById(fields[i])
    let saved = localStorage.getItem(fields[i])
    if (saved) {
        input.value = saved
    } else {
        input.value = ''
    }
    input.oninput = function() {
        localStorage.setItem(fields[i], input.value)
    }
}
