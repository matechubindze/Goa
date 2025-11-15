const savedWord = localStorage.getItem("word")
if (savedWord) {
    document.getElementById("text").textContent = savedWord
} else {
    const userWord = prompt("შეიყვანეთ სიტყვა:")
    localStorage.setItem("word", userWord)
    document.getElementById("text").textContent = userWord
}

