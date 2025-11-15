export async function getData() {
    const res = await fetch("")
    const data = await res.json()
    console.log(data)
}
