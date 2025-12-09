import { useState } from "react"

const Button = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }
}
