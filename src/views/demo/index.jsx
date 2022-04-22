import React  from "react"
// function Demo() {

//   const [count ,setCount]=useState(0)

//   const handleClick=()=>{
//     setCount(count+1)
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleClick}> +1</button>
//       <a href="https://react.iamkasong.com/">react源码学习</a>
//     </>
//   )
// }

class Child extends React.Component{

   num=10;


   componentDidUpdate(){
     console.log('update')
   }

   handle=()=>{
    console.log(this.num)
    this.num--
   }

  render(){
    console.log('render child')
    return <>
    <h1 onClick={this.handle}>{this.num}</h1>
    </>
  }
}

class Demo extends React.Component{

constructor(){
  super()
  this.state={
    show:true
  }
}

handleSwitch=()=>{
  const {show}=this.state
  this.setState({show:!show})
}

 render(){
   const {show}=this.state
   console.log('render')
   return <>
   {show&&<Child/>}
   <button onClick={this.handleSwitch}>switch</button>
   </>
 }
}

export default Demo
