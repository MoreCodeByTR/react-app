import React from "react"
function Adress(props) {

  //props属性为readonly

  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.adress}</p>
    </>
  )
}

export default Adress