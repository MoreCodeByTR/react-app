import React ,{useState} from "react"
function Demo() {

  const [count ,setCount]=useState(0)

  const handleClick=()=>{
    setCount(count+1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}> +1</button>
      <a href="https://react.iamkasong.com/">react源码学习</a>
    </>
  )
}

export default Demo
