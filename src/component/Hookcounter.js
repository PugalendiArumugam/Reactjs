import React, {useState} from 'react'

export default function Hookcounter() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Counter {count}</button>
        </div>
    )
}
