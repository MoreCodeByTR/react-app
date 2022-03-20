/* eslint-disable no-unused-vars */
import React from "react"
import { Form, Input, Button, Checkbox,message } from "antd"
import './index.css'

class AntdDemo extends React.Component {
  constructor(){
    super()
    this.state={
      count:0,
      name:'morecode',
      list:[{label:'1'}]
    }
    console.log('constructor')
  }
  formRef = React.createRef();

  static getDerivedStateFromProps(props, state){
    console.log(props,state)
    return null
  }

  static getDerivedStateFromError(error){
    console.log(error,'err')
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log(nextProps,nextState)
    return true
  }

  componentDidMount(){
    console.log('mount')
    this.setState({name:'update-name'})
    this.formRef.current.setFieldsValue({list:['123','456']})
  }

  componentWillUnmount(){
    console.log('antd页面消失了')
  }

  componentDidUpdate(){
    console.log('update')
  }

  onSubmit=()=>{
    console.log(this.formRef.current.getFieldsValue(true))
    this.formRef.current.validateFields().then((values)=>{
      console.log(values,'values')
    })
  }

  addItem=()=>{
    const {list}=this.state
    list.push({})
    this.setState({list},()=>{
      message.success('成功增加一项')
      this.forceUpdate(()=>{
        console.log('force')
      })
    })
    this.formRef.current.setFieldsValue({username:'456',bb6:'789640'})
  }

  deleteItem=()=>{
    const {list}=this.state
    list.pop()
    this.setState({list})
  }

  onFinish = (values) => {
    console.log("Success:", values)
  }

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo)
  }

  onValuesChange=(change,all)=>{
    console.log('change:',change,'all:',all)
  }

  createMarkup=()=> {
    return {__html: 'First &middot; Second'};
  }

  onClick=()=>{
    this.setState({count:this.state.count+1},()=>{
      document.title = `You clicked ${this.state.count} times`;
    })
    
  }

  render() {
    console.log('render')
    const {list,name}=this.state
    return (
      <div className="form-warp" onClick={this.onClick}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        ref={this.formRef}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        onValuesChange={this.onValuesChange}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          // name="username"
          rules={[
            {
              required: false,
              message: "Please input your username!",
            },
          ]}
        >
          <Input value={name} onChange={(e)=>{this.setState({name:e.currentTarget.value})}}/>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
          {list.map((item,index)=>{
            return <div  key={index}>
            <Form.Item  label="Password"
            name={[`list`,index]}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}>
               <Input />
            </Form.Item>
            </div>
          })}
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" onClick={this.addItem}>
            add
          </Button>
          <Button type="primary" onClick={this.deleteItem}>
            delete
          </Button>
          <Button type="primary"onClick={this.onSubmit}>
          submit
          </Button>
        </Form.Item>
      </Form>
      <div  dangerouslySetInnerHTML={{__html: 'First &middot; Second'}}/>
      </div>
    )
  }
}

export default AntdDemo
