import React from "react"
class Adress extends React.Component{

  constructor(props) {
    super(props);
    this.state = {numbers: [1,2,3,4,5]};
  }

  text=React.createRef()

  focusInput=()=>{
    this.text.current.focus()
  }

  render(){
    return (
      <>
        <h1>{this.props.name}</h1>
        <p>{this.props.adress}</p>
        <input type="text" ref={this.text}/>
        <button onClick={this.focusInput}>聚焦输入</button>
        <br/>
      </>
    )
  }

}

export default Adress