import React from "react"
import { inject, observer } from "mobx-react"
import { DatePicker, message } from "antd"
import Location from "./Location"
import moment from "moment"

const { RangePicker } = DatePicker
const dateFormat = "YYYY-MM-DD"
@inject("contract")
@observer
class Adress extends React.Component {
  constructor(){
    super()
    this.state={location:'马房山之王'}
  }

  componentDidMount(){

  }

  onChange=(e)=>{
    this.setState({location:e.target.value})
    message.info(e.target.value)
    if (e.target.value==='123') {
      e.target.setCustomValidity("请输入100以内的正整数"); 
    } else {
      e.target.setCustomValidity("");
    }
  }
  
  render() {
    const {
      contract: { dateArray },
    } = this.props
  return (
    <>
      <h1>Adress</h1>
      <Location location={this.state.location}/>
      <form>
          <input
            id="input"
            placeholder="输入123触发表单验证"
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
      {dateArray.map((item, index) => {
          const { startTime, endTime } = item
          return <div style={{marginTop:'20px'}} key={startTime}>
            <p>第{index+1}年:</p>
            <RangePicker
              disabled
              defaultValue={[
                moment(startTime, dateFormat),
                moment(endTime, dateFormat),
              ]}
            />
          </div>
        })}
    </>
  )}
}

export default Adress
